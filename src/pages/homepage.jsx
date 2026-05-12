import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Typewriter from "../components/common/typewriter";
import Article from "../components/homepage/article";
import Experience from "../components/homepage/experience";
import Skills from "../components/homepage/skills";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<section className="hero">
						<div className="hero-bg-grid" aria-hidden="true" />
						<div className="hero-bg-glow" aria-hidden="true" />
						<div
							className="hero-bg-glow hero-bg-glow--alt"
							aria-hidden="true"
						/>

						<div className="hero-content">
							<div className="hero-eyebrow">
								<span className="hero-status-dot" />
								Available for new opportunities
							</div>

							<div className="hero-prompt">
								<span className="hero-prompt-sigil">&gt;_</span>
								ritik --whoami
							</div>

							<h1 className="hero-title">
								<Typewriter
									speed={40}
									deleteSpeed={35}
									holdTime={1700}
									startDelay={300}
									loop={true}
									phrases={[
										[
											{ text: "Hello, I'm " },
											{
												text: INFO.homepage.title.split(
													" ",
												)[0],
												className: "hero-name",
											},
											{ text: "." },
										],
										[
											{ text: "I'm a " },
											{
												text: "Developer",
												className: "hero-name",
											},
											{ text: "." },
										],
										[
											{ text: "I'm a " },
											{
												text: "Designer",
												className: "hero-name",
											},
											{ text: "." },
										],
									]}
								/>
							</h1>

							<h2 className="hero-tagline">
								{INFO.homepage.tagline}
							</h2>

							<p className="hero-description">
								{INFO.homepage.description}
							</p>

							<div className="hero-cta">
								<Link to="/projects" className="btn-primary">
									See Projects
									<FontAwesomeIcon
										icon={faArrowRight}
										className="btn-icon"
									/>
								</Link>
								<Link to="/contact" className="btn-secondary">
									Get in touch
								</Link>
							</div>

							<div className="hero-stack">
								<span className="hero-stack-label">stack</span>
								<span className="hero-stack-divider" />
								<span className="hero-stack-chip">React</span>
								<span className="hero-stack-chip">
									React Native
								</span>
								<span className="hero-stack-chip">
									TypeScript
								</span>
								<span className="hero-stack-chip">Node.js</span>
								<span className="hero-stack-chip">Next.js</span>
								<span className="hero-stack-chip">AWS</span>
							</div>

							<div className="hero-socials">
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
									aria-label="GitHub"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="hero-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.linkedin}
									target="_blank"
									rel="noreferrer"
									aria-label="LinkedIn"
								>
									<FontAwesomeIcon
										icon={faLinkedin}
										className="hero-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.twitter}
									target="_blank"
									rel="noreferrer"
									aria-label="Twitter"
								>
									<FontAwesomeIcon
										icon={faTwitter}
										className="hero-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.instagram}
									target="_blank"
									rel="noreferrer"
									aria-label="Instagram"
								>
									<FontAwesomeIcon
										icon={faInstagram}
										className="hero-social-icon"
									/>
								</a>
								<a
									href={`mailto:${INFO.main.email}`}
									aria-label="Email"
								>
									<FontAwesomeIcon
										icon={faEnvelope}
										className="hero-social-icon"
									/>
								</a>
							</div>
						</div>
					</section>

					<Skills />

					<section className="section featured-section">
						<div className="section-header">
							<div>
								<div className="section-eyebrow">
									Selected work
								</div>
								<div className="section-title">
									Featured Projects
								</div>
							</div>
							<Link to="/projects" className="section-link">
								View all
								<FontAwesomeIcon
									icon={faArrowRight}
									className="section-link-icon"
								/>
							</Link>
						</div>
						<AllProjects />
					</section>

					<section className="section">
						<Experience />
					</section>

					{/* {myArticles && myArticles.length > 0 && (
						<section className="section">
							<div className="section-header">
								<div>
									<div className="section-eyebrow">
										Writing
									</div>
									<div className="section-title">
										Latest Articles
									</div>
								</div>
								<Link to="/articles" className="section-link">
									All articles
									<FontAwesomeIcon
										icon={faArrowRight}
										className="section-link-icon"
									/>
								</Link>
							</div>
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article-wrap"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</section>
					)} */}

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
