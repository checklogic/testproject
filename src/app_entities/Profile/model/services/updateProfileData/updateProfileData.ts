import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
    Profile,
    undefined,
    ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const form = getProfileForm(getState());

    try {
        const response = await extra.api.put<Profile>('/profile', form);

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
