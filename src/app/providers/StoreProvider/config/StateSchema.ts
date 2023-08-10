import {
    AnyAction,
    CombinedState,
    Reducer,
    ReducersMapObject,
    EnhancedStore,
    Dispatch,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CounterSchema } from 'app_entities/Counter';
import { ProfileSchema } from 'app_entities/Profile';
import { UserSchema } from 'app_entities/User';
import { AxiosInstance } from 'axios';
import { LoginSchema } from 'features/AuthByUsername';
import { To, NavigateOptions } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    profile: ProfileSchema;

    // async reducers
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;

    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    state: StateSchema;
    rejectValue: T;
    extra: ThunkExtraArg;
}

// export interface AppStore extends ToolkitStore<StateSchema> {
//     reducerManager?: ReducerManager;
// }
