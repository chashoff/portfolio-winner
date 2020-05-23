import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../views/Home';
import About from "../../views/About";
import Projects from "../../views/Projects";
import Blog from "../../views/Blog";

const Routes = () => (
    <Router>
        <Switch>
            <Route component={Home} path="/" />
            <Route component={Blog} path="/blog"
            <Route component={About} path="/about" />
            <Route component={Projects} path="/projects" />
        </Switch>
    </Router>
)
export default Routes;