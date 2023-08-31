import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = (): ReactNode => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid={'MainPage'}>
            {t('Главная страница')}
            <Counter />
        </Page>
    );
};

export default MainPage;
