import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('123123')
            )
        ).toEqual({ username: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'password' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('password')
            )
        ).toEqual({ password: 'password' });
    });
});
