import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('Should return isLoading', () => {
        const isLoading = true;
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading,
            },
        };

        expect(getProfileIsLoading(state as StateSchema)).toBe(isLoading);
    });
    test('Should work with empty ', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
    });
});
