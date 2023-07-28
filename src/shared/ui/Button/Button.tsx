import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'shared/lib/classNames';
import cls from './Button.module.scss';
import { Theme } from 'app/providers/ThemeProvider';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	className?: string;
	theme: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
	className,
	children,
	theme,
	...rest
}) => {
	return (
		<button
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...rest}
		>
			{children}
		</button>
	);
};
