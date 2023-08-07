import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'app_entities/User';
import { LOCALSTARAGE_USER_KEY } from 'shared/const/localstarage';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUserNameProps,
    { rejectValue: string }
>('feature/loginByUsername', async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>(
            'http://localhost:8000/login',
            authData
        );

        if (!response.data) {
            throw new Error('No data');
        }

        localStorage.setItem(
            LOCALSTARAGE_USER_KEY,
            JSON.stringify(response.data)
        );
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Вы ввели невеоный логин или пароль');
    }
});
