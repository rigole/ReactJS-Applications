import React from 'react';
import '../styles/Contact.css';

function Contact(){
    return (
        <div className="contact">
            <div className="leftSide">
               leftSide
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST" action="">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" placeholder="Enter your Name" />
                    <label htmlFor="email">Email</label>
                    <input name="name" placeholder="Enter email address" type="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Enter your message" rows="7"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}
export default Contact