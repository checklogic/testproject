import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { NotificationList } from 'app_entities/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { VStack } from 'shared/ui/Stack';
import { Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(function NotificationButton({
    className,
}: NotificationButtonProps) {
    return (
        <Popover
            className={cls.popover}
            direction={'bottom left'}
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <VStack>
                        <Icon inverted={true} Svg={NotificationIcon} />
                    </VStack>
                </Button>
            }
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
