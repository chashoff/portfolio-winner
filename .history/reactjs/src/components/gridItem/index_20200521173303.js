import React from 'react';
import FadeIn from 'react-fade-in';

const GridItem = ({margin, enter, leave, stateValue, stateString, borderMain, borderSecondary, title, description, cssContainer}) => (
    <>
        <div onMouseLeave={() => leave(stateString)} onMouseEnter={() => enter(stateString)} className="grid-item">
            <div className={cssContainer}>
                <div className="secondary-container">
                    <h1 style={{ borderLeft: borderMain, marginTop: margin }} className="grid-item-background">{title}</h1>
                    {
                        ( stateValue === true) ?
                            <FadeIn>
                                <div style={{ borderLeft: borderSecondary }} className="nav-content">
                                    <p>{description}</p>
                                    <img style={{ height: '20px', display: 'block', margin: '0 auto', paddingTop: '.75em'}} src="/images/arrows.svg" alt="" /> 
                                </div>
                            </FadeIn>: ""
                    }
                </div>
            </div>
        </div>
    </>
)
export default GridItem;