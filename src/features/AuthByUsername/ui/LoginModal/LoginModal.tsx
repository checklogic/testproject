import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
    className,
    isOpen,
    onClose,
}) => {
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.loginModal, {}, [className])}
        >
            <Suspense fallback={<Spinner />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
