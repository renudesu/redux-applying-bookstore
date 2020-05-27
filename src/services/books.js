import { BOOK_URL } from '../commons/constants/api-constants';
import axios from 'axios';

export const GetBooks = (book) => {
    return axios.get(`${BOOK_URL}?auth=false`, book, { headers: { 'x-access-token': localStorage.getItem('token') } });
}
export const CreateBook=(book)=>{
    return axios.post(BOOK_URL,book,{headers:{'x-access-token':localStorage.getItem('token')}});
}
export const UpdateBooks = (book) => {
    return axios.put(`${BOOK_URL}/${book._id}?auth=false`, book, { headers: { 'x-access-token': localStorage.getItem('token') } });
}
export const DeleteBookById = (id) => {
    return axios.delete(`${BOOK_URL}/${id}`, { headers: { 'x-access-token': localStorage.getItem('token') } });
}