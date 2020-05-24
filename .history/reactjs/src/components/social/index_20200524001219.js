import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './index.css';

const Social = () => (
    <div style={{ position: 'relative'}}>
            <img onClick={()=> window.open("https://google.com", "_blank")} className="social-icon" src="/images/iconfinder_twitter.svg" alt="" />
            <img className="social-icon" src="/images/iconfinder_github.svg" alt="" />
    </div>
)
export default Social;