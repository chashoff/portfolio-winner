import React from 'react';

const GridItem = ({enter, leave, stateValue, borderMain, borderSecondary, title, description}) => (
    <>
        
        <div onMouseLeave={() => leave("blog")} onMouseEnter={() => enter("blog")} className="grid-item">
            <div className=>
                <div className="secondary-container">
                    <h1 style={{ borderLeft: borderMain }} className="grid-item-background">{title}</h1>
                    {
                        ( stateValue === true) ?
                            <p style={{ borderLeft: borderSecondary }} className="nav-content">{description}</p>: ""
                    }
                </div>
            </div>
        </div>
    </>
)
export default GridItem;