import React from "react";

import INFO from "../../data/user";

import "./styles/experience.css";

const Experience = () => {
	return (
		<div className="experience">
			<div className="experience-header">
				<div className="experience-eyebrow">Experience</div>
				<div className="experience-title">Where I've worked</div>
			</div>

			<div className="timeline">
				{INFO.experience.map((item, idx) => (
					<div className="timeline-item" key={idx}>
						<div className="timeline-marker">
							<span className="timeline-dot" />
							{idx !== INFO.experience.length - 1 && (
								<span className="timeline-line" />
							)}
						</div>

						<div className="timeline-content">
							<div className="timeline-meta">
								<span className="timeline-duration">
									{item.duration}
								</span>
								{item.location && (
									<>
										<span className="timeline-divider">
											·
										</span>
										<span className="timeline-location">
											{item.location}
										</span>
									</>
								)}
							</div>

							<div className="timeline-role">{item.role}</div>
							<div className="timeline-company">
								{item.company}
							</div>

							<div className="timeline-description">
								{item.description}
							</div>

							{item.stack && item.stack.length > 0 && (
								<div className="timeline-stack">
									{item.stack.map((tech, i) => (
										<span className="stack-tag" key={i}>
											{tech}
										</span>
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
