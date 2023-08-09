import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('Should return password ', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: true,
                password: 'password',
                username: 'username',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toBe('password');
    });
    test('Should work with empty ', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toBe(undefined);
    });
});
