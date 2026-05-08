import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faLocationDot,
	faBriefcase,
	faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Spotlight from "../components/common/spotlight";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<Spotlight />
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-hero">
							<div className="about-eyebrow">About me</div>
							<h1 className="about-title">
								{INFO.about.title}
							</h1>
							<p className="about-subtitle">
								{INFO.about.description}
							</p>
						</div>

						<div className="about-now">
							<div className="about-now-header">
								<span className="about-now-pulse" />
								<span className="about-now-label">Now</span>
							</div>
							<div className="about-now-grid">
								<div className="now-card">
									<FontAwesomeIcon
										icon={faBriefcase}
										className="now-icon"
									/>
									<div className="now-label">Currently</div>
									<div className="now-value">
										{INFO.experience[0].role} @{" "}
										{INFO.experience[0].company}
									</div>
								</div>
								<div className="now-card">
									<FontAwesomeIcon
										icon={faLocationDot}
										className="now-icon"
									/>
									<div className="now-label">Based in</div>
									<div className="now-value">India</div>
								</div>
								<div className="now-card">
									<FontAwesomeIcon
										icon={faLaptopCode}
										className="now-icon"
									/>
									<div className="now-label">Focus</div>
									<div className="now-value">
										Mobile + Web
									</div>
								</div>
							</div>
						</div>

						<div className="about-socials-wrap">
							<div className="about-eyebrow">Elsewhere</div>
							<div className="about-socials">
								<Socials />
							</div>
						</div>

						<div className="about-cta">
							<div className="about-cta-text">
								<h2 className="about-cta-title">
									Have something to build?
								</h2>
								<p className="about-cta-sub">
									I'm currently open to new opportunities,
									collaborations, and interesting
									conversations.
								</p>
							</div>
							<Link to="/contact" className="btn-primary">
								Get in touch
								<FontAwesomeIcon
									icon={faArrowRight}
									className="btn-icon"
								/>
							</Link>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
