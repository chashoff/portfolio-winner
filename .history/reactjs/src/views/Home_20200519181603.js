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
                        <h1>Home</h1>
                    </div>
                    <div className="grid-item">
                        <h1></h1>
                    </div>
                    <div className="grid-item">

                    </div>
                    <div className="grid-item">

                    </div>
                    <div />
                </div>
            </>
        )
    }
}
export default Home;