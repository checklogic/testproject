import { ChangeEvent, FC, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select: FC<SelectProps> = memo(function Select({
    className,
    label,
    options,
    onChange,
    value,
    readonly,
}: SelectProps) {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option key={opt.value} className={cls.option} value={opt.value}>
                {opt.content}
            </option>
        ));
    }, [options]);

    return (
        <div className={classNames(cls.selectWrapper, {}, [className || ''])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
            >
                {optionList}
            </select>
        </div>
    );
});
