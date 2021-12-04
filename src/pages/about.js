import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SocialLinks from "../constants/socials";
import Head from "../components/Head";

export default function About() {
	return (
		<Layout>
			<Head title="R³ - About" />

			<main className="main">
				<section className="about-section">
					<h1 className="pg-header">About</h1>
					<div className="about-text" >
						<p>
							I am a full-stack developer with a background in graphic design and music. I love solving puzzles, dreaming up inspiring UI/UX experiences, and learning about new technologies.
						</p>

						<p>
							I am originally from Kansas City, Missouri and currently live in Cleveland, Ohio.
						</p>

						<p><em>
							But wait, I thought you were a singer?
						</em></p>

						<p>
							Yes! I am. Thankfully, I had not made a pact with a jealous sea-witch regarding my voice at any point. I still sing and teach voice lessons. <Link to="/voice" className="learn-more-link">Learn More</Link>
						</p>

						<Link to="/contact" className="btn contact-btn">
							Contact Me
						</Link>

						<SocialLinks />

					</div>
					<div className="photo-div">
						<StaticImage
							src='../assets/images/self.png'
							alt="illustration of raquel"
							className="img-top portrait-container"
							placeholder="blurred"
						/>
						<StaticImage
							src='../assets/images/profpic.jpg'
							alt="raquel smiling in a red shirt"
							className="portrait-container"
							imgClassName="selfie"
							placeholder="blurred"
						/>
					</div>
				</section>
			</main>
		</Layout >
	);
}
