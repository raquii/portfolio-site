import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SocialLinks from "../constants/socials";

export default function About() {
	return (
		<Layout>
			<main className="main">
				<section className="about-section">
					<div>
						<h2 className="pg-header">About</h2>
						<p></p>
						<p>This is about me, a person, a human.
							I am made of skin, bones, teeth, and hair.
							I have existed as a conscious being for 29 years.
							I have been paid to make noises.
							Now, I would like to be paid to boss computers around.
						</p>
						<Link to="/contact" className="btn contact-btn">Contact</Link>
						<SocialLinks />

					</div>
					<StaticImage
						src='../assets/images/self.png'
						alt="drawn portrait of raquel"
						className="portrait-container"
						placeholder="blurred"
					/>
				</section>
			</main>
		</Layout >
	);
}
