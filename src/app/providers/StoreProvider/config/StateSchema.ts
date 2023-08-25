import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '@/app_entities/Article';
import { CounterSchema } from '@/app_entities/Counter';
import { UserSchema } from '@/app_entities/User';
import { AxiosInstance } from 'axios';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { ScrollHandlerSchema } from '@/features/ScrollHandler';
import { ProfileSchema } from '@/features/editableProfileCard';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollHandler: ScrollHandlerSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlePage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
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
}

export interface ThunkConfig<T> {
    state: StateSchema;
    rejectValue: T;
    extra: ThunkExtraArg;
}
