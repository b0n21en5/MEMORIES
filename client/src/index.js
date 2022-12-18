import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux';

import reducers from './reducers'

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));



