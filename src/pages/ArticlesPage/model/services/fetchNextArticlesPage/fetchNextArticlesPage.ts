import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePagePage,
} from './../../selectors/articlePageSelector';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    undefined,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArticlePageHasMore(getState());
    const page = getArticlePagePage(getState());
    const isLoading = getArticlePageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(
            fetchArticleList({
                page: page + 1,
            })
        );
    }
});
