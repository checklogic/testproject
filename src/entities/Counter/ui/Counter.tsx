import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = (): void => {
        dispatch(counterActions.increment());
    };
    const decrement = (): void => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid='value-title'>
                {t('Значение')} = {counterValue}
            </h1>
            <Button data-testid='increment-btn' onClick={increment}>
                {t('Увеличить')}
            </Button>
            <Button data-testid='decrement-btn' onClick={decrement}>
                {t('Уменьшить')}
            </Button>
        </div>
    );
};
