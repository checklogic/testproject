import { createSlice } from '@reduxjs/toolkit';
import { NotificationSchema } from '../types/notification';

const initialState: NotificationSchema = {};

export const notificationSlice = createSlice({
    name: 'notificationSlice',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: notificationActions, reducer: notificationReducer } =
    notificationSlice;
