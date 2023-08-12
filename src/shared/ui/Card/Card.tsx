import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = memo(function Card({
    className,
    children,
    ...rest
}: CardProps) {
    return (
        <div className={classNames(cls.card, {}, [className])} {...rest}>
            {children}
        </div>
    );
});
