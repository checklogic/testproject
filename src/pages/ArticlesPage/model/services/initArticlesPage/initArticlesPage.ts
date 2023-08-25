import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/articlePageSelector';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/app_entities/Article';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const _inited = getArticlePageInited(getState());

    if (!_inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type');

        if (orderFromUrl) dispatch(articlesPageActions.setOrder(orderFromUrl));
        if (sortFromUrl) dispatch(articlesPageActions.setSort(sortFromUrl));
        if (searchFromUrl)
            dispatch(articlesPageActions.setSearch(searchFromUrl));
        if (typeFromUrl)
            dispatch(articlesPageActions.setType(typeFromUrl as ArticleType));

        dispatch(articlesPageActions.initState());
        dispatch(fetchArticleList({}));
    }
});
