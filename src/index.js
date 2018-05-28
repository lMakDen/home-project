import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from  'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import allReducers from './rootReducers';
import App from './App';
import { Application } from './containers/application';
import './index.css';

const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact  path="/" component={App} />
                <Route path="/app" component={Application} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

console.log('store', store.getState())