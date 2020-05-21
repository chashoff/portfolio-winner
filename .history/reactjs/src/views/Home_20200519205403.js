import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import '../styles/Home.css'

class Home extends Component {
    render() {
        return (
            <>
                <ParticlesBg type="cobweb" bg={true} />
                <div className="column-grid">
                    <div />
                    <div className="grid-item">
                        <div className="grid-item-container-blog">
                            <h1>Blog</h1>
                        </div>
                    </div>
                    <div style={{backgroundColor: 'green'}} className="grid-item">
                        <div className="grid-item-container-about">
                            <h1>About Me</h1>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-container-projects">
                            <div className="grid-background">
                                <h1>Projects</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-container-contact">
                            <h1>Contact</h1>
                        </div>
                    </div>
                    <div />
                </div>
            </>
        )
    }
}
export default Home;