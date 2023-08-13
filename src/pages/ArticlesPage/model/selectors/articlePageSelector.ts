import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageIsLoading = (state: StateSchema) =>
    state.articlePage?.isLoading || false;
export const getArticlePageError = (state: StateSchema) =>
    state.articlePage?.error;
export const getArticlePageView = (state: StateSchema) =>
    state.articlePage?.view;
export const getArticlePageHasMore = (state: StateSchema) =>
    state.articlePage?.hasMore;
export const getArticlePageLimit = (state: StateSchema) =>
    state.articlePage?.limit || 4;
export const getArticlePagePage = (state: StateSchema) =>
    state.articlePage?.page || 1;
