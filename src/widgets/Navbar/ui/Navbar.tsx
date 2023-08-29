import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo(function Navbar({
    className,
}: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onShowModal = () => {
        setIsAuthModal(true);
    };
    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    theme={TextTheme.INVERTED}
                    className={cls.appName}
                    title={t('Elcome App')}
                />
                <HStack gap={16}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={getRouteArticleCreate()}
                        className={cls.createArticle}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <HStack justify={'end'} gap={16} className={cls.actions}>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Text
                theme={TextTheme.INVERTED}
                className={cls.appName}
                title={t('Elcome App')}
            />
            <Button
                theme={ButtonTheme.INVERTED_CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
