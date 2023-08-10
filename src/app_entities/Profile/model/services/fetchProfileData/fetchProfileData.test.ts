import { User, userActions } from 'app_entities/User';
import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Profile } from '../../types/profile';
import { Currency } from 'app_entities/Currency';
import { Country } from 'app_entities/Country';

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

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockResolvedValue(Promise.resolve({ data }));

        const result = await thunk.callThunk(undefined);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockResolvedValue(
            Promise.resolve({ message: 'AUTH ERROR' })
        );
        const result = await thunk.callThunk(undefined);

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
