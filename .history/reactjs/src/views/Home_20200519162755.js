import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import '../styles/Home.css'

class Home extends Component {
    render() {
        return (
            <>
            <div style={{backgroundColor: '#2A2A2A', height: '100vh', width: '100%'}}>

            </div>
            <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} />
        )
    }
}
export default Home;