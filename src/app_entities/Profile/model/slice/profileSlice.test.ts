import { Country } from 'app_entities/Country';
import { Currency } from 'app_entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    first: 'Elco',
    lastname: 'Elcome',
    age: 21,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setreadonly(true)
            )
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({
            data,
            form: data,
            validateErrors: [],
            readonly: true,
        });
    });

    test('test update profile', () => {
        const update = { username: 'NewUsername', lastname: 'NewLastname' };
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { ...data, ...update },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile(update)
            )
        ).toEqual({
            data,
            form: { ...data, ...update },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({
            isLoading: true,
            validateErrors: [],
        });
    });

    //  state.isLoading = false;
    //  state.data = action.payload;
    //  state.form = action.payload;
    //  state.readonly = true;
    //  state.validateErrors = [];
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, '', undefined, undefined)
            )
        ).toEqual<ProfileSchema>({
            isLoading: false,
            validateErrors: [],
            readonly: true,
            form: data,
            data,
        });
    });
});
