import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/Items';
import cls from './SidebarItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'app_entities/User';
import { useSelector } from 'react-redux';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(function SidebarItem({
    item,
    collapsed,
}: SidebarItemProps) {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) return null;

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(`${item.text}`)}</span>
        </AppLink>
    );
});
