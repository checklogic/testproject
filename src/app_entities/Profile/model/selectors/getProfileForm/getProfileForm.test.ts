import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'app_entities/Country';
import { Currency } from 'app_entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('Should return form', () => {
        const form = {
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
                form,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('Should work with empty ', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
