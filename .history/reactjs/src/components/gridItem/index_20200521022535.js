import React from 'react';

const GridItem = ({enter, leave, stateValue, border, title, description}) => (
    <>
        <div onMouseLeave={() => leave("blog")} onMouseEnter={() => enter("blog")} className="grid-item">
            <div className="grid-item-container-blog">
                <div className="secondary-container">
                    <h1 style={{borderLeft: border }} className="grid-item-background">{title}</h1>
                    {
                        ( stateValue === true) ?
                        <p style={{borderLeft: '4px solid lightgreen'}} className="nav-content">{description}</p>: ""
                    }
                </div>
            </div>
        </div>
    </>
)
export default GridItem;