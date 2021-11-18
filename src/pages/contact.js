import React from 'react';
import Layout from "../components/Layout";
import SocialLinks from '../constants/socials';
function Contact() {
    return (
        <Layout>
            <main className="main">
                <section className="form contact-info">
                    <h3>Want to get in touch?</h3>
                </section>
                <section>
                    <form className="contact-form">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" />
                        <button type="submit" className="btn submit-btn">Submit</button>
                    </form>
                </section>
                <SocialLinks />
            </main>
        </Layout>
    )
}

export default Contact;
