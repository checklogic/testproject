import { Popover as HPopover } from '@headlessui/react';
import { ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover = memo(function Popover({
    className,
    children,
    trigger,
    direction = 'bottom right',
}: PopoverProps) {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(popupCls.popup, {}, [className])}>
            {({ open }) => (
                <>
                    <HPopover.Button className={popupCls.trigger}>
                        {trigger}
                    </HPopover.Button>
                    <HPopover.Panel
                        className={classNames(cls.panel, {}, menuClasses)}
                    >
                        {children}
                    </HPopover.Panel>
                </>
            )}
        </HPopover>
    );
});
