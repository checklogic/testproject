import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent: FC<
    ArticleImageBlockComponentProps
> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.articleImageBlockComponent, {}, [
                className,
            ])}
        >
            {t('ArticleImageBlockComponent')}
        </div>
    );
};
