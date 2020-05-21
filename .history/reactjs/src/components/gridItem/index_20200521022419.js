import React from 'react';

const GridItem = ({enter, leave, stateValue, border}) => (
    <>
        <div onMouseLeave={() => leave("blog")} onMouseEnter={() => enter("blog")} className="grid-item">
            <div className="grid-item-container-blog">
                <div className="secondary-container">
                    <h1 style={{borderLeft: border }} className="grid-item-background"></h1>
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