import { LOCALSTARAGE_USER_KEY } from './../const/localstarage';
import axios, { InternalAxiosRequestConfig } from 'axios';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    if (config.headers) {
        config.headers.Authorization =
            localStorage.getItem(LOCALSTARAGE_USER_KEY) || '';
    }
    return config;
});
