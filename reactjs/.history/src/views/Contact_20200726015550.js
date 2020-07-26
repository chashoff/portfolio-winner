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
                    <form className="contact-form" name="contact">
                        <input className="contact-input" type="text" id="name" name="name" placeholder="Name" />
                        <input className="contact-input" type="email" id="email" name="email" placeholder="Email" />
                        <input className="contact-input" type="text" id="reason" name="reason" placeholder="Reason..." />
                        <textarea rows="6" className="contact-input" type="message" id="message" name="message" placeholder="Your message..." />
                    </form>
                    <ParticlesBg type="polygon" bg={false} />
                </div>
            </div>
        )
    }
}
export default Contact;