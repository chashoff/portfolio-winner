import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../views/Home';
import About from "../../views/About";
import Projects from "../../views/Projects";
import Blog from "../../views/Blog";
import Contact from "../../views/Contact";

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/">
            <Route component={Blog} path="/blog" />
            <Route component={About} path="/about" />
            <Route component={Projects} path="/projects" />
            <Route component={Contact} path="/contact" />
        </Switch>
    </Router>
)
export default Routes;