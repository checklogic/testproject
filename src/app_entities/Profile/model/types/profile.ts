import { Country } from 'app_entities/Country';
import { Currency } from 'app_entities/Currency';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    readonly: boolean;
    error?: string;
}
