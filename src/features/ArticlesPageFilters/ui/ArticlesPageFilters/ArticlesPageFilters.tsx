import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { ArticleSortField, ArticleView } from 'app_entities/Article';
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from 'pages/ArticlesPage/model/selectors/articlePageSelector';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticlesSortSelector } from '../ArticlesSortSelector/ArticlesSortSelector';
import { SortOrder } from 'shared/types';
import { fetchArticleList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'app_entities/Article/model/types/article';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(function ArticlesPageFilters({
    className,
}: ArticlesPageFiltersProps) {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const view = useSelector(getArticlePageView);
    const order = useSelector(getArticlePageOrder);
    const sort = useSelector(getArticlePageSort);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );
    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(sort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );
    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesPageActions.setOrder(order));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );
    const onChangeSearch = useCallback(
        (value: string) => {
            dispatch(articlesPageActions.setSearch(value));
            dispatch(articlesPageActions.setPage(1));
            debounceFetchData();
        },
        [debounceFetchData, dispatch]
    );

    const onChangeTab = useCallback(
        (tab: TabItem) => {
            dispatch(articlesPageActions.setType(tab.value as ArticleType));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [fetchData, dispatch]
    );

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                content: t('Все'),
                value: ArticleType.ALL,
            },
            {
                content: t('IT'),
                value: ArticleType.IT,
            },
            {
                content: t('Наука'),
                value: ArticleType.SIENCE,
            },
            {
                content: t('Экономика'),
                value: ArticleType.ECONOMICS,
            },
        ],
        [t]
    );

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticlesSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    order={order}
                    sort={sort}
                />
                <ArticleViewSelector
                    onViewClick={onChangeView}
                    view={view || ArticleView.BIG}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
            </Card>
            <Tabs tabs={typeTabs} onTabClick={onChangeTab} value={type} />
        </div>
    );
});
