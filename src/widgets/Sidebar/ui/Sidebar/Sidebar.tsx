import { FC, memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { useSelector } from 'react-redux';
import { getSelectedItems } from '@/widgets/Sidebar/model/selectors/getSelectedItems';
import { VStack } from '@/shared/ui/Stack';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(function Sidebar({
    className,
}: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSelectedItems);

    const onToggle = (): void => {
        setCollapsed((collapsed) => !collapsed);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    collapsed={collapsed}
                    key={item.path}
                    item={item}
                />
            )),
        [collapsed, sidebarItemsList]
    );

    return (
        <aside
            data-testid='sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid='sidebar-toggle'
                className={cls.collapseBtn}
                onClick={onToggle}
                square
                size={ButtonSize.L}
                theme={ButtonTheme.INVERTED_BACKGROUND}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack
                role={'navigation'}
                gap='8'
                justify='start'
                className={cls.items}
            >
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
