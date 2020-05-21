import React, { Component } from 'react';
import '../styles/Home.css'

class Home extends Component {
    render() {
        return (
            <div className="fs-container grid-container-four">
                <div style={{ backgroundColor: '#6d72c3'}} className="nav-column">
                    <div className="container-home">
                        <h1>Home</h1>
                    </div>
                </div>
                <div style={{ backgroundColor: '#514f59'}} className="nav-column">
                    <div>
                        <h1>About</h1>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fe5f55'}} className="nav-column">
                    
                    <h1>Projects</h1>
                </div>
                <div style={{ backgroundColor: '#f7f7ff'}} className="nav-column">
                    <h1>Contact</h1>
                </div>
            </div>
        )
    }
}
export default Home;