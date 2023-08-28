import { User } from '@/entities/User';

export interface CommentEnt {
    id: string;
    user: User;
    text: string;
}
