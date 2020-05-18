import { USER_SAVE, GET_BOOK , CART_LOAD_SUCCESS} from '../commons/constants/store-constants';
import { GetBooks } from '../services/books';
import { getCart } from '../services/cart';


const bookList = (data) => {
    return {
        type: GET_BOOK,
        payload: data
    }
}
const callCart = (data) => {
    return {
        type: CART_LOAD_SUCCESS,
        payload: data
    }
}

export const saveUser = (userDetails) => {
    return {
        type: USER_SAVE,
        payload: userDetails
    }
}

export const getBook = () => {
    return function (dispatch) {
        GetBooks().then((success) => {
            dispatch(bookList(success.data));
        })
    }
}
export const getCallCart = () => {
    var userInfo = localStorage.getItem('user');
    var user = JSON.parse(userInfo);
    return function (dispatch) {
        getCart(user._id).then((success) => {
            dispatch(callCart(success.data))
        })
    }
}