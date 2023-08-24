import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGAttributes<SVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(function Icon({
    className,
    Svg,
    inverted,
}: IconProps) {
    return (
        <Svg
            className={classNames(
                inverted ? '' : cls.icon,
                { [cls.inverted]: inverted },
                [className]
            )}
        />
    );
});
