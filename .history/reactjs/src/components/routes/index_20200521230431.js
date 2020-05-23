import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../views/Home';
import About from "../../views/About";
import Projects from "../../views/Projects";

const Routes = () => (
    <Router>
        <Switch>
            <Route component={Home} path="/" />
            <Route component={About} path="/about" />
            <Route component={Projects} p
        </Switch>
    </Router>
)
export default Routes;