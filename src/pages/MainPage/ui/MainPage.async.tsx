import { lazy } from 'react';

export const MainPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // @ts-expect-error async behavior
                resolve(import('./MainPage'));
            }, 400);
        })
);
