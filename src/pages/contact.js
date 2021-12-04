import React from 'react';

import Layout from "../components/Layout";
import SocialLinks from '../constants/socials';
import ContactForm from '../components/ContactForm';
import Head from '../components/Head';

function Contact() {

    return (
        <Layout>
            <Head title="R³ - Contact" />
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
