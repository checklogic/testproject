export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ATRICLE_DETAILS = 'article_details',
    ATRICLE_EDIT = 'article_edit',
    ATRICLE_CREATE = 'article_create',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',

    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
