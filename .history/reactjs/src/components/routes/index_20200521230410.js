import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../views/Home';
import About from "../../views/About";

const Routes = () => (
    <Router>
        <Switch>
            <Route component={Home} path="/" />
            <Route component={About} path="/about"
        </Switch>
    </Router>
)
export default Routes;