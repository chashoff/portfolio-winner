import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import '../styles/Contact.css';

class Contact extends Component {
    render() {
        return(
            <div className="contact-container">
            <ParticlesBg type="cobweb" bg={true} />
                <h1>Contact Page</h1>
            </div>
        )
    }
}
export default Contact;