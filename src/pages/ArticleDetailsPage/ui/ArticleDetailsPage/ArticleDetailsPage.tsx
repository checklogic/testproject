import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            {t('ArticleDetailsPage')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
