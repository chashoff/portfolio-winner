import React from 'react';
import { FaGithub, FaTwitter, FaRProject } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
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