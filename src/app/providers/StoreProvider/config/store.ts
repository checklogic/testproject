import {
    CombinedState,
    Reducer,
    ReducersMapObject,
    configureStore,
} from '@reduxjs/toolkit';
import { counterReducer } from '@/app_entities/Counter';
import { userReducer } from '@/app_entities/User';
import { $api } from '@/shared/api/api';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { scrollHandlerReducer } from '@/features/ScrollHandler';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollHandler: scrollHandlerReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);
    const extraArgument = {
        api: $api,
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
            }).concat(rtkApi.middleware),
    });

    // @ts-expect-error reducer Manager
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
