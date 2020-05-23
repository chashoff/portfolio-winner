import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../views/Home';

const Routes = () => (
    <Router>
        <Switch>
            <Route component={Home} path="/" />
            <Route component={}
        </Switch>
    </Router>
)
export default Routes;