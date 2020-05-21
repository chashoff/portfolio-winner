import React, { Component } from 'react';
import '../styles/Home.css'

class Home extends Component {
    render() {
        return (
            <div className="fs-container grid-container-four">
                <div />
                <div style={{ backgroundColor: 'transparent'}} className="nav-column">
                    <div className="container-home">
                        <h1>Home</h1>
                    </div>
                </div>
                <div style={{ backgroundColor: 'transparent'}} className="nav-column">
                    <div className="container-about">
                        <h1>About</h1>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fe5f55'}} className="nav-column">
                    <div className="container-projects">
                        <h1>Projects</h1>
                    </div>
                </div>
                <div style={{ backgroundColor: '#f7f7ff'}} className="nav-column">
                    <div className="container-contact">
                        <h1>Contact</h1>
                    </div>
                </div>
                <div />
            </div>
        )
    }
}
export default Home;