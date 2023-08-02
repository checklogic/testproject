import { BugButton } from 'app/providers/ErrorBoundary';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = (): ReactNode => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
