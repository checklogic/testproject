import {
    AnyAction,
    CombinedState,
    Reducer,
    ReducersMapObject,
    ThunkDispatch,
    configureStore,
} from '@reduxjs/toolkit';
import { counterReducer } from 'app_entities/Counter';
import { userReducer } from 'app_entities/User';
import { $api } from 'shared/api/api';
import { AppStore, StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { NavigateOptions, To } from 'react-router-dom';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);
    const extraArgument = {
        api: $api,
        navigate,
    };

    const store: AppStore = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument,
                },
            }),
    });

    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ThunkDispatch<
    DeepPartial<StateSchema>,
    any,
    AnyAction
>;
