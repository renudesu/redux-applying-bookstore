import { USER_SAVE, GET_BOOK, CART_LOAD_SUCCESS } from '../commons/constants/store-constants';
import { GetBooks } from '../services/books';
import { getCart, updateCart, createCart } from '../services/cart';



const bookList = (data) => {
    return {
        type: GET_BOOK,
        payload: data
    }
}
const loadCart = (data) => {
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

export const getBookListAction = () => {
    return function (dispatch) {
        GetBooks().then((success) => {
            dispatch(bookList(success.data));
        })
    }
}
export const getCartListAction = (id) => {
    var userInfo = localStorage.getItem('user');
    var user = JSON.parse(userInfo);
    return function (dispatch) {
        getCart(user._id).then((success) => {

            dispatch(loadCart(success.data))
        })
    }
}
export const updateCartAction = (cart) => {
    return function (dispatch) {
        updateCart(cart).then((success) => {
            dispatch(loadCart(success.data))
        })

    }
}

export const createCartAction = (cart) => {
    return function (dispatch) {
        createCart(cart).then((success) => {
            dispatch(loadCart(success.data));
        });
    }
}