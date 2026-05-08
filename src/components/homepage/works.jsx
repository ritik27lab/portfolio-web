import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import LinkLogo from "../../assets/linkiteslogo.png";
import StackRacers from "../../assets/sr_logo.png";
import Intelion from "../../assets/intelion.png";
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	const items = [
		{
			logo: LinkLogo,
			title: "Linkites",
			subtitle: "Software Engineer",
			duration: "2021 - Present",
		},
		{
			logo: StackRacers,
			title: "Stack Racers",
			subtitle: "Software Engineer",
			duration: "2019 - Present",
		},
		{
			logo: Intelion,
			title: "Intelion Systems",
			subtitle: "QA Engineer",
			duration: "Mar 2021 - Sep 2021",
		},
	];

	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{items.map((item, idx) => (
							<div className="work" key={idx}>
								<img
									src={item.logo}
									alt={item.title}
									className="work-image"
								/>
								<div className="work-info">
									<div className="work-title">
										{item.title}
									</div>
									<div className="work-subtitle">
										{item.subtitle}
									</div>
								</div>
								<div className="work-duration">
									{item.duration}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
