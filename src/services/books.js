import { BOOK_URL } from '../commons/constants/api-constants';
import axios from 'axios';

export const GetBooks = (book) => {
    return axios.get(`${BOOK_URL}?auth=false`, book, { headers: { 'x-access-token': localStorage.getItem('token') } });
}