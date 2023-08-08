import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: false,
                password: 'password',
                username: 'username',
            },
        };

        expect(getLoginError(state as StateSchema)).toBe('error');
    });
    test('Should work with empty ', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});
