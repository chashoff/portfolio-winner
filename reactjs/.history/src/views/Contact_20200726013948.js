import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import '../styles/Contact.css';

class Contact extends Component {
    render() {
        return(
            <div className="contact-container">
                <div style={{position: 'relative'}} >
                    <div className="contact-header-container">
                        <h1 className="contact-header">Lets Connect!</h1>
                        <p>I promise </p>
                    </div>
                </div>
                <ParticlesBg type="polygon" bg={false} />
            </div>
        )
    }
}
export default Contact;