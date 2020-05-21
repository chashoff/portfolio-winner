import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import '../styles/Home.css';
import GridItem from '../components/gridItem';

import $ from 'jquery';

class Home extends Component {
    state = {
        "blog": false,
        "about": false,
        "projects": false,
        "contact": false
    }

    componentWillMount() {
        GO
    }

    enterZoneChange = (x) => {
        this.setState({[x]: true});
    }

    leaveZoneChange = (x) => {
        this.setState({[x]: false});
    }

    render() {
        return (
            <>
                <ParticlesBg type="cobweb" bg={true} />
                <div className="column-grid">
                    <div /> 
                    <GridItem
                        title="Blog" 
                        description="Checkout all of the problems I have had while coding, and what I have done to fix them! Have any coding problems? Let me know so I can take a stab at it!" 
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
                        stateString="about"
                        enter={this.enterZoneChange}
                        leave={this.leaveZoneChange}
                    />
                    <GridItem 
                        title="Projects"
                        description="Checkout all my projects I have done over the years! There are some pretty cools in here aye!"
                        borderMain="4px solid lightblue"
                        borderSecondary="4px solid lightblue"
                        cssContainer="grid-item-container-projects"
                        stateValue={this.state.projects}
                        stateString="projects"
                        enter={this.enterZoneChange}
                        leave={this.leaveZoneChange}
                    />
                    <GridItem 
                        title="Contact"
                        description="Want to connect? Here is all my social media information as well!"
                        borderMain="4px solid purple"
                        borderSecondary="4px solid purple"
                        cssContainer="grid-item-container-contact"
                        stateValue={this.state.contact}
                        stateString="contact"
                        enter={this.enterZoneChange}
                        leave={this.leaveZoneChange}
                    />
                    <div />
                </div>
            </>
        )
    }
}
export default Home;