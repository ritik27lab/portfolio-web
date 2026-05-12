import IMG from "./images";

const INFO = {
	main: {
		title: "Ritik B.",
		name: "Ritik Bhalekar",
		email: "ritikbhalekar2000@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/RitikRakhi",
		github: "https://github.com/ritik27lab",
		linkedin: "https://linkedin.com/in/ritikbhalekar27",
		instagram: "https://www.instagram.com/rithik_404/",
		// stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Ritik Bhalekar",
		role: "Mobile & Web Developer",
		tagline: "Building scalable, reliable products end-to-end.",

		description:
			"Mobile and Web Developer, and amateur designer. I have experience in building scalable, secure and reliable applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	skills: {
		Frontend: [
			{ name: "React", icon: "react", color: "#61dafb" },
			{ name: "React Native", icon: "react", color: "#61dafb" },
			{ name: "Next.js", icon: "code", color: "#fafafa" },
			{ name: "TypeScript", icon: "code", color: "#3178c6" },
			{ name: "JavaScript", icon: "js", color: "#f7df1e" },
			{ name: "HTML", icon: "html5", color: "#e34f26" },
			{ name: "CSS", icon: "css3-alt", color: "#1572b6" },
			{ name: "Sass", icon: "sass", color: "#cc6699" },
			{ name: "Tailwind CSS", icon: "wind", color: "#06b6d4" },
		],
		Backend: [
			{ name: "Node.js", icon: "node-js", color: "#339933" },
			{ name: "Express.js", icon: "server", color: "#fafafa" },
			{ name: "Python", icon: "python", color: "#3776ab" },
			{ name: "GraphQL", icon: "project-diagram", color: "#e10098" },
			{ name: "REST APIs", icon: "code", color: "#14b8a6" },
			{ name: "Websockets", icon: "code", color: "#fafafa" },

		],
		Databases: [
			{ name: "PostgreSQL", icon: "database", color: "#336791" },
			{ name: "MongoDB", icon: "leaf", color: "#47a248" },
			{ name: "Firebase", icon: "fire", color: "#ffca28" },
		],
		DevOps: [
			{ name: "Docker", icon: "docker", color: "#2496ed" },
			{ name: "Git", icon: "git-alt", color: "#f05032" },
			{ name: "GitHub", icon: "github", color: "#fafafa" },
			{ name: "CI/CD", icon: "sync-alt", color: "#14b8a6" },
		],
		Cloud: [
			{ name: "AWS", icon: "aws", color: "#ff9900" },
			{ name: "GCP", icon: "google", color: "#4285f4" },
			{ name: "Azure", icon: "microsoft", color: "#0078d4" },
		],
		Other: [
			{ name: "Linux", icon: "linux", color: "#fcc624" },
			{ name: "Agile", icon: "rocket", color: "#14b8a6" },
		],
	},

	experience: [
	{
    company: "Syba",
    role: "Technical Lead",
    duration: "Oct 2024 — Present",
    location: "Brussels, Belgium (Remote)",
    description:
        "Led full-stack development of a cross-platform mobile application including an Electron-based macOS app. Integrated Stripe payments with webhooks to PostgreSQL. Built scalable backend services with Node.js and Express.js deployed on Microsoft Azure with Clusters and Load Balancers. Managed Apple compliance through provisioning, code signing, and TestFlight/App Store notarization. Integrated native features like DNS connectivity and real-time network discovery. Defined CI/CD pipelines and mentored junior developers.",
    stack: ["React Native", "Electron", "Node.js", "Express.js", "PostgreSQL", "Azure", "Stripe"],
},
{
    company: "Multeway - Around Me Social Media App",
    role: "Full Stack Developer",
    duration: "Jan 2023 — Oct 2024",
    location: "Hyderabad, India",
    description:
        "Spearheaded development of a social platform using React Native with features like a Shoutouts Heat-Map (MapBox) and an AI Chatbot. Built scalable APIs using FastAPI, PostgreSQL, and Redis. Integrated React.js frontend and React Native mobile app from Figma designs. Used Amazon S3 as CDN. Optimized performance for consistent cross-device UX and mentored junior developers.",
    stack: ["React Native", "React", "FastAPI", "PostgreSQL", "Redis", "MapBox", "AWS S3"],
},
{
    company: "Linkites",
    role: "Software Engineer",
    duration: "Jan 2020 — Dec 2023",
    location: "Indore, India",
    description:
        "Built 3 mobile and 2 web applications using React, React Native, React Native Web, Firebase, and GraphQL. Delivered apps across verticals including media sharing, social networking, event management, and gaming. Specialized in cross-platform UX optimization across devices and screen sizes. Implemented client-specific design features and improved user engagement.",
    stack: ["React", "React Native", "React Native Web", "Firebase", "GraphQL", "Supabase"],
},
{
    company: "Intelion Systems",
    role: "Analyst",
    duration: "Mar 2021 — Sep 2021",
    location: "India",
    description:
        "Designed and executed test plans across web and mobile products. Built automation suites to catch regressions earlier in the release cycle.",
    stack: ["Selenium", "Postman", "Jest"],
},
	],

	about: {
		title: "I’m Ritik B. I live in India🇮🇳, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
	{
			title: "Syba Mobile Application",
			description:
				"SYBA helps & prevent cyber events such as identity theft and ransomware by scanning and monitoring your wifi network, devices connected to that network, and your email addresses and verifying your social media usernames with one user-friendly app.",
			logo: IMG.syba,
			linkText: "View Project",
			link: "https://syba.io",
		},
		{
			title: "Gen Z Media - Podcast Application",
			description:
				"Gen Z Media Podcast application allows us to stream the best and latest quality audio content. Collection of best podcasts like: The Unexplainable Disappearance of Mars Patel",
			logo: IMG.gzm,
			linkText: "View Project",
			link: "https://gzmshows.com",
		},
		{
			title: "WashZone",
			description:
				"Wash Zone friendly and experienced team is here to ensure you are happy and drive away in a clean car, guaranteed!",
			logo: IMG.washzone,
			linkText: "View Project",
			link: "https://washzone.us",
		},
		// {
		// 	title: "Gen Z Media - Podcast Application",
		// 	description:
		// 		"Gen Z Media Podcast application allows us to stream the best and latest quality audio content. Collection of best podcasts like: The Unexplainable Disappearance of Mars Patel",
		// 	logo: IMG.gzm,
		// 	linkText: "View Project",
		// 	link: "https://gzmshows.com",
		// },

		{
			title: "Retirely - Financial Advisory",
			description:
				"Retirely allows you to discover the best financial advisors anywhere.    Connect with advisors and investors",
			logo: IMG.retirely,
			linkText: "View Project",
			link: "https://retire.ly/",
		},

		{
			title: "Onetab.ai",
			description:
				"Your always-on AI teammate that supports every role, every department, every day.",
			logo: IMG.onetab,
			linkText: "View Project",
			link: "https://onetab.ai",
		},

		{
			title: "Litools.ai",
			description:
				"Implementing tailored enhancements into your Linkedin Profile using AI that make you stand out in your industry and attract the right audience.",
			logo: IMG.litools,

			linkText: "View Project",
			link: "https://www.litools.ai/",
		},

		{
			title: "Open AI News",
			description:
				"AI News aggregation platform that recommends personalized NEWS for different users and optimized according to the user's current location",
			logo: IMG.openainews,
			linkText: "View Project",
			link: "https://opennewsai.com",
		},
	],
};

export default INFO;
