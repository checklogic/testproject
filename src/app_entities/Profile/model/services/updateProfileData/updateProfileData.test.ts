import { Country } from 'app_entities/Country';
import { Currency } from 'app_entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile, ValidateProfileError } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

const form: Profile = {
    id: '1',
    first: 'Elco',
    lastname: 'Elcome',
    age: 21,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form },
        });

        thunk.api.put.mockResolvedValue(Promise.resolve({ data: form, form }));

        const result = await thunk.callThunk(undefined);

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(form);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form,
            },
        });
        thunk.api.put.mockResolvedValue(
            Promise.resolve({ message: 'AUTH ERROR' })
        );
        const result = await thunk.callThunk(undefined);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate no lastanme', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...form, lastname: '' },
            },
        });

        const result = await thunk.callThunk(undefined);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
