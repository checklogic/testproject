import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('Should return error string', () => {
        const error = 'error string';
        const state: DeepPartial<StateSchema> = {
            profile: {
                error,
            },
        };

        expect(getProfileError(state as StateSchema)).toBe(error);
    });
    test('Should work with empty ', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
