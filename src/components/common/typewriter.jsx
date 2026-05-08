import React, { useEffect, useState } from "react";

const renderSegments = (segments, count) => {
	let remaining = count;
	return segments.map((seg, i) => {
		const take = Math.max(0, Math.min(seg.text.length, remaining));
		remaining -= take;
		const visible = seg.text.slice(0, take);
		if (!visible) return null;
		return seg.className ? (
			<span key={i} className={seg.className}>
				{visible}
			</span>
		) : (
			<React.Fragment key={i}>{visible}</React.Fragment>
		);
	});
};

const SegmentTypewriter = ({ segments, speed, startDelay }) => {
	const fullText = segments.map((s) => s.text).join("");
	const [count, setCount] = useState(0);
	const [started, setStarted] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setStarted(true), startDelay);
		return () => clearTimeout(timeout);
	}, [startDelay]);

	useEffect(() => {
		if (!started || count >= fullText.length) return;
		const timeout = setTimeout(() => setCount((c) => c + 1), speed);
		return () => clearTimeout(timeout);
	}, [started, count, fullText.length, speed]);

	const done = count >= fullText.length;

	return (
		<>
			{renderSegments(segments, count)}
			<span
				className={`typewriter-caret ${
					done ? "typewriter-caret--blink" : ""
				}`}
				aria-hidden="true"
			/>
		</>
	);
};

const normalizePhrase = (p) => (typeof p === "string" ? [{ text: p }] : p);

const CyclingTypewriter = ({
	phrases,
	speed,
	deleteSpeed,
	holdTime,
	startDelay,
	loop,
}) => {
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [count, setCount] = useState(0);
	const [phase, setPhase] = useState("idle");

	const segments = normalizePhrase(phrases[phraseIndex]);
	const fullText = segments.map((s) => s.text).join("");

	useEffect(() => {
		if (phase !== "idle") return;
		const t = setTimeout(() => setPhase("typing"), startDelay);
		return () => clearTimeout(t);
	}, [phase, startDelay]);

	useEffect(() => {
		if (phase === "typing") {
			if (count < fullText.length) {
				const t = setTimeout(() => setCount((c) => c + 1), speed);
				return () => clearTimeout(t);
			}
			setPhase("hold");
			return;
		}
		if (phase === "hold") {
			const isLast = phraseIndex === phrases.length - 1;
			if (!loop && isLast) return;
			const t = setTimeout(() => setPhase("deleting"), holdTime);
			return () => clearTimeout(t);
		}
		if (phase === "deleting") {
			if (count > 0) {
				const t = setTimeout(() => setCount((c) => c - 1), deleteSpeed);
				return () => clearTimeout(t);
			}
			setPhraseIndex((i) => (i + 1) % phrases.length);
			setPhase("typing");
		}
	}, [
		phase,
		count,
		fullText.length,
		speed,
		deleteSpeed,
		holdTime,
		phraseIndex,
		phrases.length,
		loop,
	]);

	const stoppedAtEnd =
		phase === "hold" && !loop && phraseIndex === phrases.length - 1;

	return (
		<>
			{renderSegments(segments, count)}
			<span
				className={`typewriter-caret ${
					stoppedAtEnd ? "typewriter-caret--blink" : ""
				}`}
				aria-hidden="true"
			/>
		</>
	);
};

const Typewriter = ({
	segments,
	phrases,
	speed = 80,
	deleteSpeed = 40,
	holdTime = 1600,
	startDelay = 200,
	loop = true,
}) => {
	if (phrases && phrases.length) {
		return (
			<CyclingTypewriter
				phrases={phrases}
				speed={speed}
				deleteSpeed={deleteSpeed}
				holdTime={holdTime}
				startDelay={startDelay}
				loop={loop}
			/>
		);
	}

	return (
		<SegmentTypewriter
			segments={segments}
			speed={speed}
			startDelay={startDelay}
		/>
	);
};

export default Typewriter;
