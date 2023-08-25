import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticleList/fetchArticleList');

const searchParams: URLSearchParams = new URLSearchParams();

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false,
            },
        });

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(4);
    });

    test('initArticlesPage already inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: true,
            },
        });

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(2);
    });

    test('initArticlesPage first time', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {});

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(4);
    });
});
