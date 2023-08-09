import { LOCALSTARAGE_USER_KEY } from './../const/localstarage';
import axios from 'axios';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(LOCALSTARAGE_USER_KEY),
    },
});
