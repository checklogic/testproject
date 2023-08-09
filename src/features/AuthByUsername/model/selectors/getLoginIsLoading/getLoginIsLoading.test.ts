import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('Should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: true,
                password: 'password',
                username: 'username',
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });
    test('Should work with empty ', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toBe(undefined);
    });
});
