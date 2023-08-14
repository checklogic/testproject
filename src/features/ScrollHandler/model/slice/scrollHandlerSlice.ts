import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ScrollHandlerSchema } from '../types/scrollHandlerSchema';

const initialState: ScrollHandlerSchema = {
    scrollPositions: {},
};

export const scrollHandlerSlice = createSlice({
    name: 'scrollHandlerSlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>
        ) => {
            state.scrollPositions[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollHandlerActions, reducer: scrollHandlerReducer } =
    scrollHandlerSlice;
