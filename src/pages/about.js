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
					<h2 className="pg-header">About</h2>
					<div className="about-text" >
						<p>This is about me, a person, a human.
							I am made of skin, bones, teeth, and hair.
							I have existed as a conscious being for 29 years.
							I have been paid to make noises.
							Now, I would like to be paid to boss computers around.
						</p>
						<Link to="/contact" className="btn contact-btn">Contact Me</Link>
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
