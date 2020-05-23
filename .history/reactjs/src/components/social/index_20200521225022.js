import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa'

const Social = () => (
    <>
        <FaTwitter className="social-icon" style={{ position: 'absolute', right: '95', top: '15', fontSize: '3em' }} />
        <FaGithub style={{ position: 'absolute', right: '35', top: '15', fontSize: '3em' }} />
    </>
)
export default Social;

const styles = {
    container: {
        position: 'absolute',

    }
}