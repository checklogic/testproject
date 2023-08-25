import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo(function NotificationItem({
    className,
    item,
}: NotificationItemProps) {
    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.notificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        <AppLink to={item.href}>{content}</AppLink>;
    }

    return <>{content}</>;
});
