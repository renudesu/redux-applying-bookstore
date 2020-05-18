import { USER_SAVE, GET_BOOK, CART_LOAD_SUCCESS } from '../commons/constants/store-constants';

export const bookReducer = (state = { user: {}, books: [], cartDetails: [] }, action) => {
    switch (action.type) {
        case USER_SAVE:
            return Object.assign({}, state, { user: action.payload });
        case GET_BOOK:
            return Object.assign({}, state, { books: action.payload });
        case CART_LOAD_SUCCESS:
            return Object.assign({},state,{cartDetails:action.payload})
        default:
            return state;
    }
}
