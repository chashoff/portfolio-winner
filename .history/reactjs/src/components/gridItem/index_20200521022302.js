import React from 'react';

const GridItem = ({enter, leave, stateValue}) => (
    <>
        <div onMouseLeave={() => leave("blog")} onMouseEnter={() => enter("blog")} className="grid-item">
            <div className="grid-item-container-blog">
                <div className="secondary-container">
                    <h1 style={{borderLeft: '4px solid {d}'}} className="grid-item-background">Blog</h1>
                    {
                        ( stateValue === true) ?
                        <p style={{borderLeft: '4px solid lightgreen'}} className="nav-content">Test</p>: ""
                    }
                </div>
            </div>
        </div>
    </>
)
export default GridItem;