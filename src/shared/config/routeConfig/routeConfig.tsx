import { UserRole } from '@/app_entities/User';
import { AboutPage, MainPage, NotFoundPage, ProfilePage } from '@/pages';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { PathRouteProps } from 'react-router-dom';

export type AppRouteProps = PathRouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};

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

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ATRICLE_DETAILS]: '/articles/', // + :id
    [AppRoutes.ATRICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ATRICLE_CREATE]: '/articles/new',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ATRICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ATRICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ATRICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
