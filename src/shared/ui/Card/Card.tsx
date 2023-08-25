import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = memo(function Card({
    className,
    children,
    theme = CardTheme.NORMAL,
    ...rest
}: CardProps) {
    return (
        <div
            className={classNames(cls.card, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </div>
    );
});
