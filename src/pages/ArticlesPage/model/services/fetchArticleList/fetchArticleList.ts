import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'app_entities/Article';
import { getArticlePageLimit } from '../../selectors/articlePageSelector';

interface FetchArticleListProps {
    page?: number;
}

export const fetchArticleList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticleList', async ({ page = 1 }, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const limit = getArticlePageLimit(getState());

    try {
        const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
