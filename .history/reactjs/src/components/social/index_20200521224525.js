import React from 'react';
import { FaGithub } from 'react-icons/fa'

const Social = () => (
    <div style={styles.container}>
        <FaGithub style={{ position: 'absolute'}} />
    </div>
)
export default Social;

const styles = {
    container: {
        position: 'absolute',

    }
}