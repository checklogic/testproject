import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({
    className,
}) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.articleCodeBlockComponent, {}, [
                className,
            ])}
        >
            {t('ArticleCodeBlockComponent')}
        </div>
    );
};
