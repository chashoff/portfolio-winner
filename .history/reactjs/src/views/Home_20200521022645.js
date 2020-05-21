import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import '../styles/Home.css'
import GridItem from '../components/gridItem';

class Home extends Component {
    state = {
        "blog": false,
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
                    <GridItem title="Blog" description="Come check out all the problems I have faced while coding, and how I went about fixing them!" border="4px solid lightgreen" stateValue={this.state.blog} enter={this.enterZoneChange} leave={this.leaveZoneChange} />
                    {/* <div onMouseLeave={() => this.leaveZoneChange("blog")} onMouseEnter={() => this.enterZoneChange("blog")} className="grid-item">
                        <div className="grid-item-container-blog">
                            <div className="secondary-container">
                                <h1 style={{borderLeft: '4px solid lightgreen'}} className="grid-item-background">Blog</h1>
                                {
                                    (this.state.blog === true) ?
                                    <p style={{borderLeft: '4px solid lightgreen'}} className="nav-content">Test</p>: ""
                                }
                            </div>
                        </div>
                    </div> */}
                    <div className="grid-item">
                        <div className="grid-item-container-about">
                            <h1 style={{borderLeft: '4px solid red'}} className="grid-item-background">About Me</h1>
                        </div>
                    </div>
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