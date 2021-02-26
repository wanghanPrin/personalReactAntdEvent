import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Admin from './admin'
import Router from './router'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
// import Router from './pages/router_demo/router'
import * as serviceWorker from './serviceWorker';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
