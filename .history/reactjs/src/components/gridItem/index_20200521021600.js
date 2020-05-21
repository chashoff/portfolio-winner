import React from 'react';

const GridItem = (props) => (
    <>
        <div onMouseLeave={() => this.leaveZoneChange("blog")} onMouseEnter={() => this.enterZoneChange("blog")} className="grid-item">
            <div className="grid-item-container-blog">
                <div className="secondary-container">
                    <h1 style={{borderLeft: '4px solid lightgreen'}} className="grid-item-background">Blog</h1>
                    {
                        (this.state.blog === true) ?
                        <p style={{borderLeft: '4px solid lightgreen'}} className="nav-content">Test</p>: ""
                    }
                </div>
            </div>
        </div>
    </>
)
export default GridItem;