import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';
import List from './user/list';
import UserOrder from './user/order';
import UserCart from './user/cart';

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
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/user/list">
              <List />
            </Route>
            <Route path="/user/order">
              <UserOrder/>
            </Route>
            <Route path="/user/cart">
             <UserCart />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>


  );
}
export default App;
