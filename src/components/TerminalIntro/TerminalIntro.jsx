import { useEffect, useRef, useState } from "react";
import "../../styles/TerminalIntro.css";

const LINES = [
  "> INITIALIZING GIRLS HOO HACK 2026...",
  "> LOADING HACKATHON PROTOCOLS...",
  "> CONNECTING TO UVA MAINFRAME...",
  "> ACCESS GRANTED.",
  "> WELCOME, HACKER.",
];

const CHAR_DELAY_MIN = 12;
const CHAR_DELAY_JITTER = 12;
const LINE_PAUSE = 150;
const HOLD_AFTER_LAST_LINE = 500;
const FALLBACK_UNMOUNT_MS = 8000;

function TerminalIntro() {
  const [typedLines, setTypedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | holding | fading | done
  const [skip, setSkip] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSkip(true);
    }
  }, []);

  useEffect(() => {
    if (skip || phase !== "typing") return;

    if (lineIndex >= LINES.length) {
      setPhase("holding");
      return;
    }

    const currentLine = LINES[lineIndex];

    if (charIndex < currentLine.length) {
      timeoutRef.current = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, CHAR_DELAY_MIN + Math.random() * CHAR_DELAY_JITTER);
    } else {
      timeoutRef.current = setTimeout(() => {
        setTypedLines((prev) => [...prev, currentLine]);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, LINE_PAUSE);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [skip, phase, lineIndex, charIndex]);

  useEffect(() => {
    if (phase !== "holding") return;
    timeoutRef.current = setTimeout(() => setPhase("fading"), HOLD_AFTER_LAST_LINE);
    return () => clearTimeout(timeoutRef.current);
  }, [phase]);

  useEffect(() => {
    if (skip) return;
    const fallback = setTimeout(() => setPhase("done"), FALLBACK_UNMOUNT_MS);
    return () => clearTimeout(fallback);
  }, [skip]);

  function handleAnimationEnd(event) {
    if (event.target !== event.currentTarget) return;
    if (phase === "fading") setPhase("done");
  }

  if (skip || phase === "done") return null;

  const activeLine = LINES[lineIndex] ? LINES[lineIndex].slice(0, charIndex) : "";

  return (
    <div
      className={`terminal-intro${phase === "fading" ? " terminal-intro--fading" : ""}`}
      onAnimationEnd={handleAnimationEnd}
      aria-hidden="true"
    >
      <div className="terminal-intro__log">
        {typedLines.map((line, i) => (
          <p className="terminal-intro__line" key={i}>
            {line}
          </p>
        ))}
        {lineIndex < LINES.length && (
          <p className="terminal-intro__line">
            {activeLine}
            <span className="terminal-intro__cursor" />
          </p>
        )}
      </div>
    </div>
  );
}

export default TerminalIntro;
