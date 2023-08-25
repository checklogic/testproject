import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { NotificationList } from 'app_entities/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { VStack } from 'shared/ui/Stack';
import { Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider/AnimationProvider';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(function NotificationButton({
    className,
}: NotificationButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <VStack>
                <Icon inverted={true} Svg={NotificationIcon} />
            </VStack>
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={cls.popover}
                    direction={'bottom left'}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
});
