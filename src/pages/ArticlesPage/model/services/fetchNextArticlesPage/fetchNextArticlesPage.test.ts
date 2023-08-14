import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk(undefined);

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 });
    });

    test('fetchArticleList not called no more', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk(undefined);

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
    test('fetchArticleList not called while loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        });

        await thunk.callThunk(undefined);

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
