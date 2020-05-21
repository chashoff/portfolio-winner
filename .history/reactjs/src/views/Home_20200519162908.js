import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import '../styles/Home.css'

class Home extends Component {
    render() {
        return (
            <ParticlesBg type="circle" bg={true} />
        )
    }
}
export default Home;