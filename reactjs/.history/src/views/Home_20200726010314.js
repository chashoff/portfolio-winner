import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import '../styles/Home.css';
import GridItem from '../components/gridItem';
import $ from 'jquery';
import Social from '../components/social';

class Home extends Component {
    state = {
        "blog": false,
        "about": false,
        "projects": false,
        "contact": false,
        "breakOne": 0,
        "breakTwo": 0,
        "breakThree": 0,
    }

    componentWillMount() {
        const x = $( window ).height();
        let cut = x/10;
        let breakOne = cut*4;
        let breakTwo = cut *3;
        let breakThree = cut *5;
        this.setState({breakOne: breakOne});
        this.setState({breakTwo: breakTwo});
        this.setState({breakThree: breakThree})
    }

    componentDidMount() {
        console.log(this.state.breakOne)
    }

    enterZoneChange = (x) => {
        this.setState({[x]: true});
    }

    leaveZoneChange = (x) => {
        this.setState({[x]: false});
    }

    render() {
        let width = $( window ).width();
        return (
            <div style={{ position: 'relative'}}>
                <ParticlesBg type="cobweb" bg={true} />
                <Social />
                {
                    (width < 1000) ? <> 
                }
                
            </div>
        )
    }
}
export default Home;