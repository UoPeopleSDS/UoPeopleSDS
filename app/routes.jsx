import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import HomePage from './pages/homePage.jsx';

const DEBUG = process.env.NODE_ENV === 'development';

export default (
    <Router history={browserHistory}>
        <Route path={DEBUG?"/":"/UoPeopleSDS.github.io"} component={HomePage} />
    </Router>
);