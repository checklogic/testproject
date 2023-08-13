import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                // @ts-expect-error async behavior
                resolve(import('./ProfilePage'));
            }, 400);
        })
);
