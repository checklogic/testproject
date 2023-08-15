import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // @ts-expect-error async behavior
                resolve(import('./ArticleEditPage'));
            }, 400);
        })
);
