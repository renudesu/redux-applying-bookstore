import React from 'react';

import { connect } from 'react-redux';
import { getBook, getCallCart } from '../+state/actions';

import { createCart, updateCart } from '../services/cart';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            cartDetails: {}
        }
    }
    componentDidMount() {
        this.props.list();
        this.props.cart();
    }

    addToCart = (value) => {
        // console.log(this.state);
        const orders = this.state.cartDetails.orders;
        if (this.state.cartDetails.orders) {
            let index = -1;
            for (var i = 0; i < orders.length; i++) {
                if (orders[i].itemId === value._id) {
                    index = i;
                }
            }
            if (index > -1) {
                orders[index].quantity++;
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
                ...this.state.cartDetails,
                orders: orders
            }
            console.log(cart);
            updateCart(cart).then((success) => {
                setTimeout(this.props.cart(), 1500);

            })
        }
        else {
            const getUser = localStorage.getItem('user');
            const user = JSON.parse(getUser);

            var obj = {
                'userId': user._id,
                orders: [
                    {
                        'name': value.name,
                        'itemId': value._id,
                        'quantity': 1,
                        'cost': value.cost,
                        'currencyIn': value.currencyIn
                    }
                ]
            }
            this.setState({
                cartDetails: obj
            })
            createCart(obj).then((success) => {
                setTimeout(this.props.cart(), 1500);
                console.log(success);

            })
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
        cartDetails:state.cartDetails
    }
}
const mapDispatchToProps = dispatch => {
    return {
        list: () => dispatch(getBook()),
        cart: () => dispatch(getCallCart())


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);