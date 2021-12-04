import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";

function Voice() {
    return (
        <Layout>
            <main className="main voice-pg">
                <section className="voice-section-head">
                    <h1 className="voice-header">Voice</h1>
                    <StaticImage
                        src='../../assets/images/bwheadshot.jpeg'
                        alt="black and white profile of raquel"
                        className="voice-img"
                        placeholder="dominantColor"
                    />
                </section>
                <section className="voice-text">
                    <p>
                        <b>Raquel Román-Rodriguez</b>, <i>soprano</i>, holds a Masters of Music in Vocal Performance from the Cleveland Institute of Music. She is currently the cantor at St. Rocco's Parish in Cleveland. In the Fall of 2021, Raquel stepped down from her role as Director of Vocal Studies at Notre Dame College in South Euclid, Ohio, where she taught applied voice and directed choral ensembles to <a href="https://dev.to/raquii/giving-up-the-ghost-why-i-m-trading-my-academic-career-for-software-engineering-1p55" >pursue a career in software development</a>.
                    </p>
                    <p>
                        As a voice teacher, Raquel is a pedagogy-nerd with a passion for cross-training vocal styles. Her teaching philosophy is grounded in fostering a positive-reinforcement filled environment for students to unlock their true vocal potential. Her students have been accepted to prestigious programs around the US and Europe, including University of the Arts, HMDK Stuttgart, Baldwin Wallace University, DePaul University, Belmont University, NYU, Oberlin College, University of Michigan, and more. She is a member of the National Association of Teachers of Singing.
                    </p>
                    <p>
                        As a singer, Raquel has performed in a variety of capacities and styles. Her opera credits include: Countess in Mozart's <i>Le Nozze di Figaro</i> with ViVace Opera Workshop in Vancouver, BC, and as a chorus member in productions with Cleveland Opera Theater. While at CIM, she performed as Second Lady in scenes from <i>Die Zauberflöte</i> in the opera scenes program and as Maid 2 in the full production of <i>Amelia al Ballo</i>. She also participated in the opera scenes program at her undergraduate institution, Avila University, singing Mimi in Giacomo Puccini’s <i>La Bohème</i>, Susannah in Carlisle Floyd’s <i>Susannah</i>, and Blanche de la Force in Francis Poulenc’s <i>Dialogues of the Carmelites</i>. Raquel has also performed in numerous musical theater productions, including Mrs. Banks in <i>Mary Poppins</i> with Gladstone Theater in the Park, as well as chorus roles in <i>Young Frankenstein</i>, <i>9 to 5</i>, <i>The Producers</i>, <i>Jekyll &#038; Hyde</i>, and more while at Avila University.
                    </p>
                </section>
            </main>
        </Layout>
    )
}

export default Voice;
