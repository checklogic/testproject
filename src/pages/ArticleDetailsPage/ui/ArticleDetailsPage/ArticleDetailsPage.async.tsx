import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // @ts-expect-error async behavior
                resolve(import('./ArticleDetailsPage'));
            }, 400);
        })
);
