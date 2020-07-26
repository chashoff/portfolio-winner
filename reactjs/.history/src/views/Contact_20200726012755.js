import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import '../styles/Contact.css';

class Contact extends Component {
    render() {
        return(
            <>
                <div style={{position: 'relative'}} className="contact-container">
                    <h1>Contact Page</h1>
                </div>
                <ParticlesBg type="circle" bg={true} />
            </>
        )
    }
}
export default Contact;