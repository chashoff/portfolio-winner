import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './index.css';

const Social = () => (
    <>
        <Link><img style={{ position: 'absolute', right: '100', height: '2.2em' }} src="/images/iconfinder_twitter.svg" alt="" /></a>
        
        <Link className="social-icon">
            <FaGithub style={{ position: 'absolute', right: '35', top: '15', fontSize: '2em', color: 'black' }} />
        </Link>
    </>
)
export default Social;