import { FC, ReactNode } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Portal } from 'shared/ui/Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
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
    const { isClosing, close, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

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
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
