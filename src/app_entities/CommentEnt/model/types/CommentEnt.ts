import { User } from 'app_entities/User';

export interface CommentEnt {
    id: string | number;
    text: string;
    user: User;
}
