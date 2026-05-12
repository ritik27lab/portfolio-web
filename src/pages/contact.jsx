import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const EMAILJS_SERVICE_ID = "service_pjiv0no";
const EMAILJS_TEMPLATE_ID = "template_099rihg";
const EMAILJS_PUBLIC_KEY = "8TKrU3zoDcCuB_rSU";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("idle");
	const [errors, setErrors] = useState({});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const validate = () => {
		const errs = {};
		if (!name.trim()) errs.name = "Name is required.";
		if (!email.trim()) errs.email = "Email is required.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
			errs.email = "Please enter a valid email address.";
		if (!message.trim()) errs.message = "Message cannot be empty.";
		return errs;
	};

	const handleSendMessage = async () => {
		const errs = validate();
		if (Object.keys(errs).length > 0) {
			setErrors(errs);
			return;
		}
		setErrors({});
		setStatus("sending");

		// ⚠️  These keys MUST exactly match your EmailJS template variables.
		// Open your template at https://dashboard.emailjs.com/admin/templates
		// and rename the variables there to match these exactly:
		//   {{from_name}}  {{from_email}}  {{message}}  {{to_name}}
		const templateParams = {
			from_name: String(name.trim()),
			from_email: String(email.trim()),
			message: String(message.trim()),
			to_name: String(INFO.main?.name || "there"),
		};

		// This log will show you exactly what is being sent — check the console
		console.log("Sending to EmailJS:", templateParams);

		try {
			const result = await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				templateParams,
				{ publicKey: EMAILJS_PUBLIC_KEY },
			);
			console.log("EmailJS success:", result.status, result.text);
			setStatus("success");
			setName("");
			setEmail("");
			setMessage("");
		} catch (err) {
			console.error("EmailJS error:", err);
			setStatus("error");
		}
	};

	const isSending = status === "sending";

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
							{/* ✅ Fixed: was <text> which is not a valid HTML/JSX tag */}
							<span style={{ marginLeft: "5%" }}>
								Let's get in touch
							</span>

							<div className="contact-us-container">
								<div className="input-row">
									<div className="input-group">
										<label>Name:</label>
										<input
											type="text"
											value={name}
											onChange={(e) => {
												setName(e.target.value);
												setErrors((p) => ({
													...p,
													name: "",
												}));
											}}
											placeholder="Enter your name"
											className="rounded-input"
											disabled={isSending}
										/>
										{errors.name && (
											<span className="error-text">
												{errors.name}
											</span>
										)}
									</div>

									<div className="input-group">
										<label>Email ID:</label>
										<input
											type="email"
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
												setErrors((p) => ({
													...p,
													email: "",
												}));
											}}
											placeholder="Enter your email"
											className="rounded-input"
											disabled={isSending}
										/>
										{errors.email && (
											<span className="error-text">
												{errors.email}
											</span>
										)}
									</div>
								</div>

								<div className="input-group">
									<label>Message:</label>
									<textarea
										value={message}
										onChange={(e) => {
											setMessage(e.target.value);
											setErrors((p) => ({
												...p,
												message: "",
											}));
										}}
										placeholder="Enter your message"
										rows="4"
										className="rounded-input"
										disabled={isSending}
									/>
									{errors.message && (
										<span className="error-text">
											{errors.message}
										</span>
									)}
								</div>

								{status === "success" && (
									<p className="success-text">
										✅ Message sent! I'll get back to you
										within 24 hours.
									</p>
								)}
								{status === "error" && (
									<p className="error-text">
										❌ Something went wrong. Please try
										again or email me directly at{" "}
										<a href={`mailto:${INFO.main.email}`}>
											{INFO.main.email}
										</a>
										.
									</p>
								)}

								<button
									className="send-button"
									onClick={handleSendMessage}
									disabled={isSending}
								>
									{isSending ? "Sending…" : "Send"}
								</button>
							</div>
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly
							at&nbsp;
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							above to get in touch. Finally, if you prefer to
							connect on social media, you can find me on&nbsp;
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								Instagram
							</a>
							. Thanks again for your interest — I look forward to
							hearing from you!
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
