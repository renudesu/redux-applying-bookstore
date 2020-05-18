import {CART_URL} from '../commons/constants/api-constants';
import axios from 'axios';

export const createCart= (cart) =>{
    return axios.post(CART_URL,cart,{headers:{'x-access-token':localStorage.getItem('token')}});
}
export const getCart= (userId) =>{
    return axios.get(`${CART_URL}/${userId}`,{headers:{'x-access-token':localStorage.getItem('token')}});
}
export const updateCart = (cart) =>{
    return axios.put(`${CART_URL}/${cart._id}`,{headers:{'x-access-token':localStorage.getItem('token')}});
}