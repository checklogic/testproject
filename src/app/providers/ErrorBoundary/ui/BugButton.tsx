import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
    const [error, setError] = useState(false);

    const { t } = useTranslation();
    const onThrow = (): void => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow} theme={ThemeButton.CLEAR}>
            {t('Прокинуть ошибку')}
        </Button>
    );
};