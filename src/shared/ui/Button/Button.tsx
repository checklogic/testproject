import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    INVERTED_CLEAR = 'invertedClear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    INVERTED_BACKGROUND = 'invertedBackground',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    theme?: ButtonTheme;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize;
    /**
     * Флаг, отвечающий за работу кнопки
     */
    disabled?: boolean;
    /**
     * Содержимое кнопки
     */
    children?: ReactNode;
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = memo(function Button({
    className,
    children,
    square = false,
    size = ButtonSize.M,
    theme = ButtonTheme.OUTLINE,
    disabled = false,
    fullWidth,
    ...rest
}: ButtonProps) {
    const mods: Mods = {
        [cls[theme]]: true,
        [cls.squre]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            disabled={disabled}
            className={classNames(cls.button, mods, [className])}
            {...rest}
        >
            {children}
        </button>
    );
});
