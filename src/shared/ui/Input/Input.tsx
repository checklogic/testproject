import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo(function Input({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...rest
}: InputProps) {
    const ref = useRef<HTMLInputElement>(null);

    const [carriagePosition, setCarriagePosition] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCarriagePosition(e.target.value.length);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCarriagePosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}` + '>'}</div>
            )}
            <div className={cls.carriageWrapper}>
                <input
                    ref={ref}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...rest}
                />
                {isFocused && (
                    <span
                        className={cls.carriage}
                        style={{ left: `${carriagePosition * 7}px` }}
                    />
                )}
            </div>
        </div>
    );
});
