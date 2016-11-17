/**
 * Created by yjf on 16-11-16.
 */
import 'core-js/fn/object/assign';
import React from 'react';
import {Router, Route,hashHistory, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';

import App from './components/main';
import Login from './components/auth/login';
import Home from './components/home/index';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login} />
            <Route path="login" component={Login}/>
            <Router path="home" component={Home}/>
        </Route>
    </Router>
    ),
    document.getElementById('app')
);
