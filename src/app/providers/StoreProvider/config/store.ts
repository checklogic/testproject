import {
    CombinedState,
    Reducer,
    ReducersMapObject,
    configureStore,
} from '@reduxjs/toolkit';
import { counterReducer } from 'app_entities/Counter';
import { userReducer } from 'app_entities/User';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from 'shared/api/api';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

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

    const store = configureStore({
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

    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
