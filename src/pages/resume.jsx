import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

const resumePDF = "/assets/resume/RithikResumev1.pdf";

const Resume = () => {
	const [numPages, setNumPages] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setError(null);
	}

	function onDocumentLoadError(err) {
		console.error("PDF load error:", err);
		setError(err.message);
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO?.description} />
				<meta
					name="keywords"
					content={currentSEO?.keywords?.join(", ")}
				/>
			</Helmet>
			<div>
				<div className="page-content">
					<NavBar active="resume" />
					<div className="content-wrapper">
						<div className="resume-logo-container">
							<div className="resume-logo">
								<Logo width={46} />
							</div>
						</div>

						<div className="resume-container">
							<div className="resume-header">
								{/* <h1 className="resume-title"></h1> */}
								<a
									href={resumePDF}
									download="Rithik-Resume@8319041599.pdf"
									className="resume-download-btn"
									target="_blank"
									rel="noreferrer"
								>
									↓ Download Resume
								</a>
							</div>

							<div className="resume-viewer">
								{error ? (
									<div className="resume-error">
										<p>
											Failed to load PDF.{" "}
											<a
												href={resumePDF}
												target="_blank"
												rel="noreferrer"
											>
												Open directly instead →
											</a>
										</p>
									</div>
								) : (
									<Document
										file={resumePDF}
										onLoadSuccess={onDocumentLoadSuccess}
										onLoadError={onDocumentLoadError}
										className="resume-document"
									>
										{Array.from(
											new Array(numPages),
											(el, index) => (
												<Page
													key={`page_${index + 1}`}
													pageNumber={index + 1}
													className="resume-page"
													renderTextLayer={true}
													renderAnnotationLayer={true}
													width={Math.min(
														window.innerWidth * 0.8,
														900,
													)}
												/>
											),
										)}
									</Document>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
