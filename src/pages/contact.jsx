import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSendMessage = () => {
		if (!name || !email || !message) {
			alert("Please fill in all fields");
		} else {
			// You can implement the logic to send the message here, such as making an API call

			// For demonstration purposes, we'll just show an alert with the message
			alert(
				`Message Sent\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
			);

			// Clear the input fields after sending the message
			setName("");
			setEmail("");
			setMessage("");
		}
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							<text style={{ marginLeft: "5%" }}>
								Let's get in touch
							</text>
							{/* : Ways to Connect with Me */}
							<div className="contact-us-container">
								{/* <h2>Contact Us</h2> */}
								<div className="input-row">
									<div className="input-group">
										<label style={{ fontSize: 20 }}>
											Name:
										</label>
										<input
											type="text"
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
											placeholder="Enter your name"
											className="rounded-input"
										/>
									</div>
									<div className="input-group">
										<label style={{ fontSize: 20 }}>
											Email ID:
										</label>
										<input
											type="email"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
											placeholder="Enter your email"
											className="rounded-input"
										/>
									</div>
								</div>
								<div className="input-group">
									<label style={{ fontSize: 20 }}>
										Message:
									</label>
									<textarea
										value={message}
										onChange={(e) =>
											setMessage(e.target.value)
										}
										placeholder="Enter your message"
										rows="4"
										className="rounded-input"
									></textarea>
								</div>
								<button
									style={{ backgroundColor: "#14b8a6" }}
									onClick={handleSendMessage}
								>
									Send
								</button>
							</div>
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. I post regular updates and engage with my
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and I look forward
							to hearing from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
