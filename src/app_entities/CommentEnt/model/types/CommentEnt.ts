import { User } from '@/app_entities/User';

export interface CommentEnt {
    id: string;
    user: User;
    text: string;
}
