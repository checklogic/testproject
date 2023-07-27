import { FC, ReactNode } from 'react';
import classNames from 'shared/lib/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	children: ReactNode;
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
	to,
	className,
	theme = AppLinkTheme.PRIMARY,
	children,
	...rest
}) => {
	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...rest}
		>
			{children}
		</Link>
	);
};
