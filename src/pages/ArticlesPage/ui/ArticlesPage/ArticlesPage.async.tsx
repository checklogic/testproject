import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // @ts-expect-error async behavior
                resolve(import('./ArticlesPage'));
            }, 1500);
        })
);
