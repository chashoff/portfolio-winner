import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './index.css';

const Social = () => (
    <div style={{ position: 'relative'}}>
            <a href=""><img className="social-icon" src="/images/iconfinder_twitter.svg" alt="" /></a>
            <img className="social-icon" src="/images/iconfinder_github.svg" alt="" />
    </div>
)
export default Social;