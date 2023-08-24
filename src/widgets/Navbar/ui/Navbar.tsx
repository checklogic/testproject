import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from 'app_entities/User';
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
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';

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
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onShowModal = () => {
        setIsAuthModal(true);
    };
    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    const renderAdminPanel = () => {
        if (isAdminPanelAvailable) {
            return [
                {
                    content: t('Админка'),
                    href: RoutePath.admin_panel,
                },
            ];
        }
        return [];
    };

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
                        <Dropdown
                            direction='bottom left'
                            className={cls.dropdown}
                            items={[
                                ...renderAdminPanel(),
                                {
                                    content: t('Профиль'),
                                    href: RoutePath.profile + authData.id,
                                },
                                {
                                    content: t('Выйти'),
                                    onClick: onLogout,
                                },
                            ]}
                            trigger={<Avatar size={30} src={authData.avatar} />}
                        />
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
