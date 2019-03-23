import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Middle from './components/Middle/Middle';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import HomePage from './components/HomePage/HomePage';

const Routes=()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Middle}/>
            <Route  path='/Login' component={Login} />
            <Route  path='/Signup' component={Signup} />
            <Route  path='/HomePage' component={HomePage} />
        </Switch>
    </BrowserRouter>
);
export default Routes;


