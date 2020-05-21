import React from 'react';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const GridItem = ({enter, leave, stateValue, stateString, borderMain, borderSecondary, title, description, cssContainer}) => (
    <>
        <div onMouseLeave={() => leave(stateString)} onMouseEnter={() => enter(stateString)} className="grid-item">
            <div className={cssContainer}>
                <div className="secondary-container">
                    <h1 style={{ borderLeft: borderMain }} className="grid-item-background">{title}</h1>
                    {
                        ( stateValue === true) ?
                            <div style={{ borderLeft: borderSecondary }} className="nav-content">
                                <p>{description}</p>
                                <img style={{ height: '20px', margin: '0 auto'}} src="/images/arrows.svg" alt="" /> 
                            </div>: ""
                    }
                </div>
            </div>
        </div>
    </>
)
export default GridItem;