import { lazy } from 'react';

export const AboutPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // @ts-expect-error async behavior
                resolve(import('./AboutPage'));
            }, 1500);
        })
);
