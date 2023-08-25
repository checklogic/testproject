import { Country } from '@/app_entities/Country';
import { Currency } from '@/app_entities/Currency';

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}
