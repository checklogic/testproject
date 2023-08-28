import { UserRole } from '@/app_entities/User';
import { PathRouteProps } from 'react-router-dom';

export type AppRouteProps = PathRouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
