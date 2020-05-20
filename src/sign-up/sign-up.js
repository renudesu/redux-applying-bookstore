import React from 'react';

import { withRouter } from 'react-router-dom';
import {Register} from '../services/user';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            phoneNumber: '',
            address: ''
        }
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    signup =() =>{
       Register(this.state).then((success)=>{

       })
    }
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <input type="text" name="firstName" placeholder="Enter firstName" onChange={this.onChangeText} />
                <input type="text" name="lastName" placeholder="Enter lastName" onChange={this.onChangeText} />
                <input type="text" name="username" placeholder="Enter username" onChange={this.onChangeText} />
                <input type="password" name="password" placeholder="Enter password" onChange={this.onChangeText} />
                <input type="phoneNumber" name="phoneNumber" placeholder="Enter phoneNumber" onChange={this.onChangeText} />
                <textarea type="text" name="address" placeholder="address" onChange={this.onChangeText} />
                <button type="button"  className="btn btn-primary mt-5" onClick={this.signup}>sign up</button>
            </div>
        );
    }
}

export default withRouter (SignUp);