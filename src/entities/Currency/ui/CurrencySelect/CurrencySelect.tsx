import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Currency } from '../../model/types/currency';
import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo(
    function CurrencySelect({
        className,
        onChange,
        value,
        readonly,
    }: CurrencySelectProps) {
        const { t } = useTranslation();

        const onChangeCurrencyHendler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange]
        );

        return (
            <ListBox
                className={classNames('', {}, [className])}
                onChange={onChangeCurrencyHendler}
                label={t('Укажите валюту')}
                value={value}
                items={options}
                defaultValue={'Укажите валюту'}
                readonly={readonly}
            />
        );
    }
);
