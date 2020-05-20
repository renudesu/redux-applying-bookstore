import React from 'react';

import { connect } from 'react-redux';
import { getBookListAction, getCartListAction, updateCartAction, createCartAction } from '../+state/actions';


class UserList extends React.Component {

    componentDidMount() {
        this.props.list();
        this.props.cart();
    }
    // getCallCart = () => {
    //     const userInfo = localStorage.getItem('user');
    //     const user = JSON.parse(userInfo);
    //     getCart(user._id).then((success) => {
    //         this.setState({
    //             cartDetails: success.data
    //         })
    //     })
    // }
    // componentWillReceiveProps() {
    //     console.log("Update");
    //     if (this.props.cartDetails) {
    //         this.setState({
    //             cartDetails: this.props.cartDetails
    //         });
    //     }
    // }

    addToCart = (value) => {
        console.log(this.props.cartDetails);
        if (this.props.cartDetails.orders) {
            // console.log('if condition');
            const orders = this.props.cartDetails.orders.slice();
            let index = -1;
            for (var i = 0; i < orders.length; i++) {
                if (orders[i].itemId === value._id) {
                    index = i;
                }
            }
            if (index > -1) {
                orders[index].quantity++;
                // console.log("quantity inc")
            }
            else {
                orders.push({
                    'name': value.name,
                    'itemId': value._id,
                    'quantity': 1,
                    'cost': value.cost,
                    'currencyIn': value.currencyIn
                })
            }
            const cart = {
                ...this.props.cartDetails,
                orders: orders
            }
            console.log("cartOrders", orders)
            this.props.toUpdateCart(cart);
        }
        else {
            var userInfo = localStorage.getItem('user');
            var user = JSON.parse(userInfo);
            var obj = {
                'userId': user._id,
                'orders': [
                    {
                        'name': value.name,
                        'itemId': value._id,
                        'quantity': 1,
                        'cost': value.cost,
                        'currencyIn': value.currencyIn
                    }
                ]
            }
            this.props.toCreateCart(obj);
        }
    }
    render() {
        const listOfBooks = this.props.userBookList && this.props.userBookList.map((value, index) => {
            return (
                <div key={index}>
                    <li >{value.name}</li>
                    <button className="btn btn-primary" onClick={() => { this.addToCart(value) }}>Add to cart</button>
                </div>
            );
        })
        return (
            <div className="row mt-5">
                {listOfBooks}
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        userBookList: state.books,
        cartDetails: state.cartDetails
    }
}
const mapDispatchToProps = dispatch => {
    return {
        list: () => dispatch(getBookListAction()),
        cart: () => dispatch(getCartListAction()),
        toUpdateCart: (cart) => dispatch(updateCartAction(cart)),
        toCreateCart: (cart) => dispatch(createCartAction(cart))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
