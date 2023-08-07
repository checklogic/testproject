import { CounterSchema } from 'app_entities/Counter';
import { UserSchema } from 'app_entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
}
