import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import cls from './AvatarDropdown.module.scss';

export const AvatarDropdown = memo(function AvatarDropdown() {
    const { t } = useTranslation();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const isAdminPanelAvailable = isAdmin || isManager;
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const renderAdminPanel = () => {
        if (isAdminPanelAvailable) {
            return [
                {
                    content: t('Админка'),
                    href: getRouteAdminPanel(),
                },
            ];
        }
        return [];
    };

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction='bottom left'
            className={cls.dropdown}
            items={[
                ...renderAdminPanel(),
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData.id),
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
