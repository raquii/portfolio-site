import React from 'react';
import Layout from "../components/Layout";
import SocialLinks from '../constants/socials';
function Contact() {
    return (
        <Layout>
            <main className="main">
                <section className="contact-content">
                    <h3>Want to get in touch?</h3>
                    <SocialLinks />
                </section>
                <section className="contact-form-container">
                    <form className="contact-form">
                        <label htmlFor="name">Name</label>
                        <input className="form-input" type="text" name="name" id="name" />
                        <label htmlFor="email">Email</label>
                        <input className="form-input" type="email" name="email" id="email" />
                        <label htmlFor="message">Message</label>
                        <textarea className="form-input" name="message" rows="5" cols="33" id="message" />
                        <button type="submit" className="btn submit-btn">Submit</button>
                    </form>
                </section>
            </main>
        </Layout>
    )
}

export default Contact;
