import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { ReactNode, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter = (): ReactNode => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className='page-wrapper'>{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
