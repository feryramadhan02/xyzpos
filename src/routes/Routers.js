import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import Dashboard from '../views/Dashboard';

const Routers = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard />
                </Route>
                <Route component={() => "404 Not Found"} />
            </Switch>
        </div>
    )
}

export default Routers;
