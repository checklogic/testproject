import { FC, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

export interface AppLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo(function AppLink({
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...rest
}: AppLinkProps) {
    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [
                className || '',
                cls[theme],
            ])}
            {...rest}
        >
            {children}
        </Link>
    );
});
