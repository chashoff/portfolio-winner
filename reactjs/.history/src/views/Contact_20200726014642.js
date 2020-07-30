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
                        <h6 style={{textAlign: 'center'}}>I promise I don't bite...</h6>
                    </div>
                    <form name="contact">
                        <input className="contact-input" type="text" id="name" name="name" placeholder="Name" />
                        <input className="contact-input" type="email" id="email" name="email" placeholder="Email" />
                        <textarea className="contact-input" type="message" id="message" name="message" placeholder="Your message..."
                    </form>
                </div>
                <ParticlesBg type="polygon" bg={false} />
            </div>
        )
    }
}
export default Contact;