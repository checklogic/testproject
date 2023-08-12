import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../module/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo(function ArticleList({
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
}: ArticleListProps) {
    const { t } = useTranslation();

    const renderArticles = (el: Article) => {
        return (
            <ArticleListItem
                key={el.id}
                article={el}
                view={view}
                className={cls.card}
            />
        );
    };

    return (
        <div className={classNames(cls.articleList, {}, [className])}>
            {articles.length ? articles.map(renderArticles) : null}
        </div>
    );
});
