import React from 'react';

import Layout from "../components/Layout";
import SocialLinks from '../constants/socials';
import ContactForm from '../components/ContactForm';

function Contact() {

    return (
        <Layout>
            <main className="main contact-page">
                <h1 className="contact-header">Contact Me</h1>
                <section className="contact-content">
                    <h3>Want to get in touch?</h3>
                    <SocialLinks />
                </section>
                <section className="contact-form-container">
                    <ContactForm />
                </section>
            </main>
        </Layout>
    )
}

export default Contact;
