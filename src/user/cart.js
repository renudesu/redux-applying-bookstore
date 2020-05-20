import React from 'react';

import { connect } from 'react-redux';
import { getCartListAction } from '../+state/actions';

class UserCart extends React.Component {
    constructor() {
        super();
        this.state = {
            shippingAddress: '',
            phoneNumber: ''
        }
    }
    componentDidMount() {
        this.props.userCart();
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const cart = this.props.cartDetails && this.props.cartDetails.orders && this.props.cartDetails.orders.map((value, index) => {
            return (
                <div key={index}>
                    <li >BookName:{value.name}</li>
                    <p>Quantity:{value.quantity}</p>
                    <p>price:{value.cost}</p>
                </div>
            )
        })
        return (
            <div>
                <div className="row mt-5 ml-2">{cart}</div>
                <p>totalItems:{this.props.cartDetails.totalItems}</p>
                <p>totalprice:{this.props.cartDetails.totalPrice}</p>
                <textarea type="text" name="shippingAddress" placeholder="Address" onChange={this.onChangeText} /><br />
                <input type="text" name="phoneNumber" placeholder="Enter phone number" onChange={this.onChangeText} /><br />
                <button type="button" className="btn btn-primary mt-5" onClick={this.buy}>Buy</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails
    }
}
const mapDispatchToProps = dispatch => {
    return {
        userCart: () => dispatch(getCartListAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserCart);