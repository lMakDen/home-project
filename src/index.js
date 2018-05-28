import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from  'react-redux';
// import { Router, Route, browserHistory  } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App';
import { Application } from './containers/application';

import './index.css';

function allReducers(state = []) {
    return state
}

const store = createStore(allReducers);

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