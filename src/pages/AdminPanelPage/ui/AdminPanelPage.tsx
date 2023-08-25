import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = (): ReactNode => {
    const { t } = useTranslation();

    return <Page>{t('Админ панель')}</Page>;
};

export default AdminPanelPage;
