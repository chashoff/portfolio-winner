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
                        <div>
                            <p style={{ borderLeft: borderSecondary }} className="nav-content">{description}</p>
                            <img src="" alt="" /> : ""
                    }
                </div>
            </div>
        </div>
    </>
)
export default GridItem;