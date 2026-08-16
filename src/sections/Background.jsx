import { useMemo } from "react";
import "../styles/Background.css";

const STAR_COLORS = [
  "#FFFFFF",
  "#E8EDF2",
  "#C9D1D9",
  "#FFF4D6",
  "#DDE7EF",
];

export default function Background() {
  const stars = useMemo(() => {
    return Array.from({ length: 1200 }, (_, i) => {
      const size =
        Math.random() < 0.92
          ? Math.random() * 1.4 + 0.3
          : Math.random() * 2.5 + 1;

      const color =
        Math.random() < 0.08
          ? "#FFF1C7"
          : STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];

      return {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size,
        color,
        opacity: Math.random() * 0.65 + 0.15,
        blur: Math.random() < 0.08 ? Math.random() * 1.5 : 0,
      };
    });
  }, []);

  return (
    <div className="starfield">
      <div className="nebula" />

      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            filter: `blur(${star.blur}px)`,
          }}
        />
      ))}
    </div>
  );
}