import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './index.css';

const Social = () => (
    <>
        <Link className="social-icon">
            <img style={{ position: 'absolute', right: '25', top: '0', height: '2.2em' }} src="/images/iconfinder_twitter.svg" alt="" />
        </Link>
        <Link className="social-icon">
            <FaGithub style={{ position: 'absolute', right: '35', top: '15', fontSize: '2em', color: 'black' }} />
        </Link>
    </>
)
export default Social;