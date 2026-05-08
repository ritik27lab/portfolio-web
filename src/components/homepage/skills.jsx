import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faJs,
	faHtml5,
	faCss3Alt,
	faSass,
	faNodeJs,
	faPython,
	faGitAlt,
	faGithub,
	faAws,
	faGoogle,
	faMicrosoft,
	faDocker,
	faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
	faCode,
	faServer,
	faDatabase,
	faRocket,
	faProjectDiagram,
	faSyncAlt,
	faFire,
	faLeaf,
	faWind,
} from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/skills.css";

const ICONS = {
	react: faReact,
	js: faJs,
	html5: faHtml5,
	"css3-alt": faCss3Alt,
	sass: faSass,
	"node-js": faNodeJs,
	python: faPython,
	"git-alt": faGitAlt,
	github: faGithub,
	aws: faAws,
	google: faGoogle,
	microsoft: faMicrosoft,
	docker: faDocker,
	linux: faLinux,
	code: faCode,
	server: faServer,
	database: faDatabase,
	rocket: faRocket,
	"project-diagram": faProjectDiagram,
	"sync-alt": faSyncAlt,
	fire: faFire,
	leaf: faLeaf,
	wind: faWind,
};

const Skills = () => {
	const skills = INFO.skills;
	if (!skills || Object.keys(skills).length === 0) return null;

	return (
		<section className="skills-section">
			<div className="section-header">
				<div>
					<div className="section-eyebrow">Tech I work with</div>
					<div className="section-title">Skills</div>
				</div>
			</div>

			<div className="skills-categories">
				{Object.entries(skills).map(([category, items]) => (
					<div className="skills-category" key={category}>
						<div className="skills-category-label">{category}</div>
						<div className="skills-grid">
							{items.map((skill, idx) => (
								<span
									className="skill-chip"
									key={idx}
									style={{ "--brand-color": skill.color }}
								>
									<FontAwesomeIcon
										icon={ICONS[skill.icon] || faCode}
										className="skill-icon"
									/>
									<span className="skill-name">
										{skill.name}
									</span>
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
