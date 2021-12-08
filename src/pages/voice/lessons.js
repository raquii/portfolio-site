import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Head from '../../components/Head';

function lessons() {
    return (
        <Layout>
            <Head title="R³ - Voice Lessons" />
            <main className="main voice-pg">
                <section className="voice-section-head">
                    <h1 className="voice-header">Voice Lessons</h1>
                    <StaticImage
                        src='../../assets/images/larynx.jpg'
                        alt="medical sketches of the larynx"
                        className="voice-img"
                        placeholder="dominantColor"
                    />
                </section>
                <section className="voice-text">
                    <h2>I am currently accepting new students.
                    </h2>
                    <p>
                        As a voice teacher, I believe deeply that students flourish with a teacher who balances their expectations with the individual needs of each student. A voice student needs to feel that their teacher sees them as an individual and truly believes they can do the things they are being asked to do. I work very hard to meet each of my students exactly where they are-- in technique, in practice expectations, and in focus.
                    </p>
                    <p> I accept dedicated students over the age of 10. </p>
                    <Link to="/contact" className="btn projects-btn">
                        Contact Me About Lessons
                    </Link>
                </section>
            </main>
        </Layout>
    )
}

export default lessons;
