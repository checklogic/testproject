import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
    className,
    children,
    isOpen = false,
    onClose,
    lazy,
}) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const timerRef: { current: NodeJS.Timeout | null } = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback((): void => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current as NodeJS.Timeout);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.modal, mods, [
                    className,
                    'app_modal',
                ])}
            >
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
