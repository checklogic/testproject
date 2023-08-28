import { memo, useCallback } from 'react';
import cls from './AvatarDropdown.module.scss';
import { useTranslation } from 'react-i18next';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/app_entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { RoutePath } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(function AvatarDropdown({
    className,
}: AvatarDropdownProps) {
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
                    href: RoutePath.admin_panel,
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
                    href: RoutePath.profile + authData.id,
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
