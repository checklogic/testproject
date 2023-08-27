import { FC, SVGAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGAttributes<SVGElement> {
    className?: string;
    Svg: FC<SVGAttributes<SVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(function Icon({
    className,
    Svg,
    inverted,
    ...rest
}: IconProps) {
    return (
        <Svg
            className={classNames(
                inverted ? '' : cls.icon,
                { [cls.inverted]: inverted },
                [className]
            )}
            {...rest}
        />
    );
});
