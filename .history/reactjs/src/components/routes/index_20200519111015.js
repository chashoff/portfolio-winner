import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../views/Home';

const Routes = () => (
    <Router>
        <Switch>
            <Route to={Home} path="/" />
        </Switch>
    </Router>
)
export default Routes;