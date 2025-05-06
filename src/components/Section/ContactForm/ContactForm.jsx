'use client';

import React from 'react'
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            // "your_service_id",       // from EmailJS dashboard
            "service_5sjnalj",
            // "your_template_id",      // from EmailJS dashboard
            "template_f800n4d",
            e.target,
            // "your_public_key"        // from EmailJS dashboard
            "Wc5t5GepTcSU2_BfS"
        ).then(
            (result) => {
                console.log(result.text);
                alert("Message sent!");
            },
            (error) => {
                console.log(error.text);
                alert("Failed to send message.");
            }
        );

        e.target.reset();
    };
    return (
        <div className="zubuz-form-wrap">
            <h3>Fill the from below</h3>
            <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="zubuz-main-form">
                            <input type="text" name='user_name' placeholder="Your Name*" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="zubuz-main-form">
                            <input type="email" name='user_email' placeholder="Email Address*" />
                        </div>
                    </div>
                </div>
                <div className="zubuz-main-form">
                    <input type="text" name='subject' placeholder="Subject" />
                </div>
                <div className="zubuz-main-form">
                    <textarea
                        name="message"
                        placeholder="Write us your comment"
                    ></textarea>
                </div>
                <button id="zubuz-submit-btn" type="submit">
                    <span>Send Message</span>
                </button>
            </form>
        </div>
    )
}

export default ContactForm
