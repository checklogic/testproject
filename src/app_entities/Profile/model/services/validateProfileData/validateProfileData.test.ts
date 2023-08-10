import { Country } from 'app_entities/Country';
import { Currency } from 'app_entities/Currency';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data: Profile = {
    first: 'Elco',
    lastname: 'Elcome',
    age: 21,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without firstname and lastname', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toContain(ValidateProfileError.INCORRECT_AGE);
        expect(result).toContain(ValidateProfileError.INCORRECT_USER_DATA);
        expect(result).toContain(ValidateProfileError.INCORRECT_COUNTRY);
    });
});
