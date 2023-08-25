import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollPositions = (state: StateSchema) =>
    state.scrollHandler.scrollPositions;
export const getScrollPositionByPath = createSelector(
    getScrollPositions,
    (_: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
);
