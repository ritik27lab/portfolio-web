import React from "react";

export const DoodleTriangles = ({ className = "" }) => (
	<svg
		className={className}
		width="44"
		height="14"
		viewBox="0 0 44 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M2 12 L8 2 L14 12 Z M16 12 L22 2 L28 12 Z M30 12 L36 2 L42 12 Z"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinejoin="round"
			fill="none"
		/>
	</svg>
);

export const DoodleArrow = ({ className = "" }) => (
	<svg
		className={className}
		width="42"
		height="14"
		viewBox="0 0 42 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M2 7 C 10 1, 22 13, 38 7 M32 3 L38 7 L34 11"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
		/>
	</svg>
);

export const DoodleScribble = ({ className = "" }) => (
	<svg
		className={className}
		width="60"
		height="20"
		viewBox="0 0 60 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M2 10 C 8 2, 14 18, 22 10 S 36 2, 44 10 S 56 18, 58 10"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			fill="none"
		/>
	</svg>
);
