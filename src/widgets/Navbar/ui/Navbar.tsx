import { getUserAuthData, userActions } from 'app_entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';
import { HStack } from 'shared/ui/Stack';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo(function Navbar({
    className,
}: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onShowModal = () => {
        setIsAuthModal(true);
    };
    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <HStack>
                    <Text
                        theme={TextTheme.INVERTED}
                        className={cls.appName}
                        title={t('Elcome App')}
                    />
                    <HStack gap={16} justify={'end'}>
                        <AppLink
                            theme={AppLinkTheme.SECONDARY}
                            to={RoutePath.article_create}
                        >
                            {t('Создать статью')}
                        </AppLink>
                        <Button
                            theme={ButtonTheme.INVERTED_CLEAR}
                            onClick={onLogout}
                        >
                            {t('Выйти')}
                        </Button>
                    </HStack>
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
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
