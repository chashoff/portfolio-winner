import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import '../styles/Contact.css';

class Contact extends Component {
    render() {
        return(
            <div className="contact-container">
                <div style={{position: 'relative'}} >
                    <div>
                        <h1>Contact Page</h1>
                    </div>
                </div>
                <ParticlesBg type="polygon" bg={true} />
            </div>
        )
    }
}
export default Contact;