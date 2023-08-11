import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({
    className,
}) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.articleTextBlockComponent, {}, [
                className,
            ])}
        >
            {t('ArticleTextBlockComponent')}
        </div>
    );
};
