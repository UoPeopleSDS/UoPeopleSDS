import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import HomePage from './pages/homePage.jsx';

const DEBUG = process.env.NODE_ENV === 'development';

// Handle GitHub Pages
let BASE_PATH = window.location.pathname;
if (BASE_PATH.endsWith('/')) {
    BASE_PATH = BASE_PATH.substr(0, BASE_PATH.length - 1);
}

export default (
    <Router history={browserHistory}>    
    <Route path={DEBUG?"/":BASE_PATH} component={HomePage} />
    </Router>
);