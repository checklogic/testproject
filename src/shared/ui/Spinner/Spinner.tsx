import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Spinner.module.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => {
    return (
        <div className={classNames(cls['lds-ring'], {}, [className || ''])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
