import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGAttributes<SVGElement>>;
}

export const Icon = memo(function Icon({ className, Svg }: IconProps) {
    return <Svg className={classNames(cls.icon, {}, [className])} />;
});
