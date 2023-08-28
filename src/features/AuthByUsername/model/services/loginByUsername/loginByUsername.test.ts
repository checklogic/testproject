import { User, userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
    test('success', async () => {
        const userValue: User = { username: '123', id: '1' };
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockResolvedValue(Promise.resolve({ data: userValue }));

        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });
        const { dispatch } = thunk;

        expect(dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue)
        );
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockResolvedValue(
            Promise.resolve({ message: 'AUTH ERROR' })
        );
        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });
        const { dispatch } = thunk;
        expect(thunk.api.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
