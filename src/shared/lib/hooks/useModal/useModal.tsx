import { useState, useRef, useEffect, useCallback } from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

export function useModal({ onClose, isOpen, animationDelay }: UseModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef: { current: NodeJS.Timeout | null } = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback((): void => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        },
        [close]
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

    return {
        isClosing,
        isMounted,
        close,
    };
}
