import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { useNotifications } from '../../api/notifcationsApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo(function NotificationList({
    className,
}: NotificationListProps) {
    const { data: notifications, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack gap={16} className={classNames('', {}, [className])}>
                <Skeleton width={'100%'} border={'8px'} height={'80px'} />
                <Skeleton width={'100%'} border={'8px'} height={'80px'} />
                <Skeleton width={'100%'} border={'8px'} height={'80px'} />
            </VStack>
        );
    }

    return (
        <VStack gap={16} className={classNames('', {}, [className])}>
            {notifications?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
