import { routeConfig } from 'features/config/routeConfig/routeConfig';
import { ReactNode, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = (): ReactNode => {
    return (
        <Suspense fallback={<div> Loading... </div>}>
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
