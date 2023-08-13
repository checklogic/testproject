import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../module/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, i) => (
            <ArticleListItemSkeleton className={cls.card} key={i} view={view} />
        ));
};

export const ArticleList = memo(function ArticleList({
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
}: ArticleListProps) {
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

    // if (isLoading) {
    //     return (
    //         <div className={classNames('', {}, [className, cls[view]])}>
    //             {getSkeletons(view)}
    //         </div>
    //     );
    // }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticles) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
