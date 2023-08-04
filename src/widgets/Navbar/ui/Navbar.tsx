/* eslint-disable i18next/no-literal-string */
import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className || ''])}>
            <Button
                theme={ButtonTheme.INVERTED_CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam totam maiores ea impedit laudantium rem facere
                voluptatem nihil, velit repellendus minima ex commodi explicabo
                deserunt tempora expedita minus magni ipsum?
            </Modal>
        </div>
    );
};
