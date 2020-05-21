import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import '../styles/Home.css'

class Home extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#2A2A2A', height: '100vh', width: '100%'}}>
                <h1>test</h1>
                <ParticlesBg color="#ff0000"  type="circle" bg={true} />
            </div>
        )
    }
}
export default Home;