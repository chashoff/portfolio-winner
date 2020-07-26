import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import '../styles/Contact.css';

class Contact extends Component {
    render() {
        return(
            <div style={{position: 'relative'}}>
                <div style={{position: 'relative'}} className="contact-container">
                    <div>
                        <h1>Contact Page</h1>
                    </div>
                    <ParticlesBg style={{position: 'relative', zIndex: '1'}} type="polygon" bg={true} />
                </div>
                
            </div>
        )
    }
}
export default Contact;