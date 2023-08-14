import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
    children,
    reducers,
    removeAfterUnmount = true,
}) => {
    const store = useStore() as ReduxStoreWithManager;

    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(([name, reducer]) => {
            if (!mountedReducers[name as StateSchemaKey]) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

    return <>{children}</>;
};
