import { ReactNode, Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    AppRouteProps,
    routeConfig,
} from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { RequreAuth } from './RequreAuth';

export const AppRouter = memo(function AppRouter(): ReactNode {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequreAuth roles={route.roles}>{element}</RequreAuth>
                    ) : (
                        <>{element}</>
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
