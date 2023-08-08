import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('Should return username ', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: true,
                password: 'password',
                username: 'username',
            },
        };

        expect(getLoginUsername(state as StateSchema)).toBe('username');
    });
    test('Should work with empty ', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toBe(undefined);
    });
});
