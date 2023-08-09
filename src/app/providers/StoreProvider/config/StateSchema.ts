import {
    AnyAction,
    CombinedState,
    Reducer,
    ReducersMapObject,
    EnhancedStore,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'app_entities/Counter';
import { ProfileSchema } from 'app_entities/Profile';
import { UserSchema } from 'app_entities/User';
import { LoginSchema } from 'features/AuthByUsername';

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
