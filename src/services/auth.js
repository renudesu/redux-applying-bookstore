import {AUTH_URL} from '../commons/constants/api-constants';
import axios from 'axios';
export const Login = (user)=>{
    return axios.post(AUTH_URL,user);
}