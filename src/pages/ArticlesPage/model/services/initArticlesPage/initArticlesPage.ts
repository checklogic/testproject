import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/articlePageSelector';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const _inited = getArticlePageInited(getState());

    if (!_inited) {
        dispatch(articlesPageActions.initState());
        dispatch(
            fetchArticleList({
                page: 1,
            })
        );
    }
});
