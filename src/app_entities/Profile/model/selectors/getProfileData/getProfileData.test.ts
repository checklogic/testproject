import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from 'app_entities/Country';
import { Currency } from 'app_entities/Currency';

describe('getProfileData.test', () => {
    test('Should return data', () => {
        const data = {
            first: 'Elco',
            lastname: 'Elcome',
            age: 21,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
            avatar: '',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('Should work with empty ', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
