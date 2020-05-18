import React from 'react';

import { connect } from 'react-redux';
import { saveUser } from '../+state/actions';
import { Login } from '../services/auth';
// import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    login = () => {
        Login(this.state).then((success) => {
            localStorage.setItem('user', JSON.stringify(success.data.details));
            localStorage.setItem('token', success.data.token);
            this.props.saveUser(success.data.details);
        })
    }
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <input type="text" name="username" placeholder="Enter username" onChange={this.onChangeText} />
                <input type="password" name="password" placeholder="Enter password" onChange={this.onChangeText} />
                <button type="button" onClick={this.login}>Login</button>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveUser: function (user) { dispatch(saveUser(user)) }
    }
}
export default connect(null, mapDispatchToProps)(SignIn);
