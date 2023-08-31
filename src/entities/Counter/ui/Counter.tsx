import { Button } from '@/shared/ui/Button';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { add, decrement, increment } = useCounterActions();

    const handleIncrement = (): void => {
        increment();
    };
    const handleDecrement = (): void => {
        decrement();
    };

    const handleAdd = (): void => {
        add(10);
    };

    return (
        <div>
            <h1 data-testid='value-title'>
                {t('Значение')} = {counterValue}
            </h1>
            <Button data-testid='increment-btn' onClick={handleIncrement}>
                {t('Увеличить')}
            </Button>
            <Button data-testid='decrement-btn' onClick={handleDecrement}>
                {t('Уменьшить')}
            </Button>
            <Button data-testid='add-btn' onClick={handleAdd}>
                {t('+10')}
            </Button>
        </div>
    );
};
