import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import '../styles/Home.css'
import GridItem from '../components/gridItem';

class Home extends Component {
    state = {
        "blog": false,
        "about": false,
    }

    enterZoneChange = (x) => {
        this.setState({[x]: true});
    }
    leaveZoneChange = (x) => {
        this.setState({[x]: false})
    }
    render() {
        return (
            <>
                <ParticlesBg type="cobweb" bg={true} />
                <div className="column-grid">
                    <div /> 
                    <GridItem 
                        title="Blog" 
                        description="Come check out all the problems I have faced while coding, and how I went about fixing them!" 
                        borderMain="4px solid lightgreen"
                        borderSecondary="4px solid lightgreen" 
                        cssContainer="grid-item-container-blog"
                        stateValue={this.state.blog} 
                        stateString="blog"
                        enter={this.enterZoneChange} 
                        leave={this.leaveZoneChange}
                    />
                    <GridItem 
                        title="About Me"
                        description="This is all about me. Why I chose to become a developer, and my life before my development career!"
                        borderMain="4px solid red"
                        borderSecondary="4px solid red"
                        cssContainer="grid-item-container-about"
                        stateValue={this.state.about}
                        state
                        enter={this.enterZoneChange}
                        leave={this.leaveZoneChange}
                    />
                    {/* <div className="grid-item">
                        <div className="grid-item-container-about">
                            <h1 style={{borderLeft: '4px solid red'}} className="grid-item-background">About Me</h1>
                        </div>
                    </div> */}
                    <div className="grid-item">
                        <div className="grid-item-container-projects">
                            <h1 style={{borderLeft: '4px solid lightblue'}} className="grid-item-background">Projects</h1>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-container-contact">
                            <h1 style={{borderLeft: '4px solid purple'}} className="grid-item-background">Contact</h1>
                        </div>
                    </div>
                    <div />
                </div>
            </>
        )
    }
}
export default Home;