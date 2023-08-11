import { lazy } from 'react';

export const MainPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error async behavior
            setTimeout(() => {
                resolve(import('./MainPage'));
            }, 1500);
        })
);
