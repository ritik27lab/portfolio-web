import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import LinkLogo from "../../assets/linkiteslogo.png";
import StackRacers from "../../assets/sr_logo.png";
import Intelion from "../../assets/intelion.png";
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={LinkLogo}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Linkites</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src={StackRacers}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Stack Racers</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>
						<div className="work">
							<img
								src={Intelion}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Intelion Systems</div>
							<div className="work-subtitle">QA Engineer</div>
							<div className="work-duration">
								Mar 2021 - Sep 2021
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
