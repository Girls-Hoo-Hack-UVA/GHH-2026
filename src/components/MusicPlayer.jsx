import { useRef, useState } from "react";
import "../styles/MusicPlayer.css";
import track from "./music/playstarz_music-space-ambient-435262.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="music-player">
      <audio ref={audioRef} src={track} loop />
      <button
        className="music-toggle"
        onClick={toggle}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        aria-pressed={isPlaying}
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
}

export default MusicPlayer;
