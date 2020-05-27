import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';

import UserList from './user/list';
import UserOrder from './user/order';
import UserCart from './user/cart';

import AdminBookList from './admin/list';
import AddBook from './admin/addBook';
import EditBook from './admin/editBook';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import { bookReducer } from './+state/reducer';


// const initialState = {};
const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
})

const store = createStore(bookReducer, compose(applyMiddleware(thunk), composeEnhancers()));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect
                to={{
                  pathname: "/signin"
                }}
              />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>

            <AdminAuthentication path='/admin/list'>
              <AdminBookList />
            </AdminAuthentication>

            <UserAuthentication path='/user/list'>
              <UserList />
            </UserAuthentication>

            <Route path="/user/order">
              <UserOrder />
            </Route>
            <Route path="/user/cart">
              <UserCart />
            </Route>

            <Route path="/admin/addbook">
              <AddBook />
            </Route>
            <Route path="/admin/editbook">
              <EditBook />
            </Route>

          </Switch>
        </div>
      </Router>
    </Provider>


  );
}


function UserAuthentication(props) {
  const role = localStorage.getItem('role');
  if (role === 'user') {
    return (
      <Route path={props.path}>
        {props.children}
      </Route>
    )
  }
  else {
    localStorage.clear();
    return (
      <Redirect
        to={{
          pathname: "/signin"
        }} />
    )
  }
}
function AdminAuthentication(props) {
  const user = localStorage.getItem('user');
  const userInfo= JSON.parse(user);
  console.log(userInfo.role);
  if (userInfo.role === 'admin') {
    return (
      <Route path={props.path}>
        {props.children}
      </Route>
    )
  }
  else {
    //localStorage.clear();
    return (
      <Redirect to={{ pathname: "/signin" }} />
    )
  }
}

export default App;
