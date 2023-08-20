import { ArticleList } from 'app_entities/Article';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from 'pages/ArticlesPage/model/selectors/articlePageSelector';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { getArticles } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(function ArticleInfiniteList({
    className,
}: ArticleInfiniteListProps) {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text title={t('Произошла ошибка при подгрузке данных')}></Text>;
    }

    return (
        <ArticleList
            className={className}
            view={view}
            isLoading={isLoading}
            articles={articles}
        />
    );
});
