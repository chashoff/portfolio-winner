import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import '../styles/Contact.css';

class Contact extends Component {
    render() {
        return(
            <>
                <div style={{position: 'relative'}} className="contact-container">
                    <div></div>
                    
                </div>
                <ParticlesBg type="polygon" bg={true} />
            </>
        )
    }
}
export default Contact;