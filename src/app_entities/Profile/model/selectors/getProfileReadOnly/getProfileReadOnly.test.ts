import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadOnly';

describe('getProfileReadonly.test', () => {
    test('Should return readonly', () => {
        const readonly = true;
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly,
            },
        };

        expect(getProfileReadonly(state as StateSchema)).toBe(readonly);
    });
    test('Should work with empty ', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
    });
});
