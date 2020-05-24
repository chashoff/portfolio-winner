import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './index.css';

const Social = () => (
    <div style={{ position: 'relative'}}>
            <img className="social-icon" src="/images/iconfinder_twitter.svg" alt="" />
            <FaGithub style={{ position: 'absolute', right: '35', top: '15', fontSize: '2em', color: 'black' }} />
    </div>
)
export default Social;