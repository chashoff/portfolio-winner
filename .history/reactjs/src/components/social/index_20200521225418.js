import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import N
import './index.css';

const Social = () => (
    <>
        <NavLink></NavLink>
        <FaTwitter className="social-icon" style={{ position: 'absolute', right: '85', top: '15', fontSize: '2em' }} />
        <FaGithub className="social-icon" style={{ position: 'absolute', right: '35', top: '15', fontSize: '2em' }} />
    </>
)
export default Social;

const styles = {
    container: {
        position: 'absolute',

    }
}