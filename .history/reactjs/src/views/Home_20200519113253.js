import React, { Component } from 'react';
import '../styles/Home.css'

class Home extends Component {
    render() {
        return (
            <div className="fs-container grid-container-four">
                <div backgroundColor: '' className="nav-column">
                    <h1>Home</h1>
                </div>
                <div style={{ backgroundColor: ''}} className="nav-column">
                    <h1>About</h1>
                </div>
                <div backgroundColor: '' className="nav-column">
                    <h1>Projects</h1>
                </div>
                <div backgroundColor: '' className="nav-column">
                    <h1>Contact</h1>
                </div>
            </div>
        )
    }
}
export default Home;