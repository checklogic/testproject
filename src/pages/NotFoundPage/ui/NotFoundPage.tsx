import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation('notFound');

    return (
        <Page className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
};
