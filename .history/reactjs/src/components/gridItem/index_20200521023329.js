import React from 'react';
import { fadeIn } from 'react-animations'

const GridItem = ({enter, leave, stateValue, borderMain, borderSecondary, title, description}) => (
    <>
        
        <div onMouseLeave={() => leave("blog")} onMouseEnter={() => enter("blog")} className="grid-item">
            <div className="grid-item-container-blog">
                <div className="secondary-container">
                    <h1 style={{ borderLeft: borderMain }} className="grid-item-background">{title}</h1>
                    <fadeIn>
                    {
                        ( stateValue === true) ?
                            <p style={{ borderLeft: borderSecondary }} className="nav-content">{description}</p>: ""
                        
                    }
                    </fadeIn>
                </div>
            </div>
        </div>
    </>
)
export default GridItem;