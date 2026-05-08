import { useEffect } from "react";

const Spotlight = () => {
	useEffect(() => {
		const root = document.querySelector(".page-content");
		if (!root) return;

		let raf = 0;
		const onMove = (e) => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				root.style.setProperty("--mx", `${e.clientX}px`);
				root.style.setProperty("--my", `${e.clientY}px`);
			});
		};

		window.addEventListener("mousemove", onMove);
		return () => {
			window.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(raf);
		};
	}, []);

	return null;
};

export default Spotlight;
