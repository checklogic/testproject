import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { ReactNode, Suspense, memo, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'app_entities/User';

export const AppRouter = memo(function AppRouter(): ReactNode {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((el) => {
            if (el.authOnly && !isAuth) return false;

            return true;
        });
    }, [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className='page-wrapper'>{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});
