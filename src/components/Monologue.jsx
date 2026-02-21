import React, { useRef, useState } from "react";
import { RevealBlock, SectionLabel, DisplayHeading } from "./UI";

const VIDEOS = [
  { src: "/VID1.mp4", label: "Monologue 01", genre: "Dramatic" },
  { src: "/VID3.mp4", label: "Monologue 02", genre: "Dramatic" },
  { src: "/VID4.mp4", label: "Monologue 03", genre: "Comedic" },
  { src: "/VID7.mp4", label: "Monologue 04", genre: "Dramatic" },
  { src: "/VID5.mp4", label: "Monologue 05", genre: "Period" },
  { src: "/VID2.mp4", label: "Monologue 06", genre: "Contemporary" },
  { src: "/VID6.mp4", label: "Monologue 07", genre: "Dramatic" },
];

/* ── Single video card ── */
const VideoCard = ({ video, index }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggle = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (playing) {
      vid.pause();
      setPlaying(false);
    } else {
      vid.play();
      setPlaying(true);
    }
  };

  return (
    <RevealBlock delay={index * 70}>
      <div
        className="
          group relative aspect-[9/16]
          rounded-card overflow-hidden
          border border-white/[0.06]
          bg-ghost
          hover:border-gold/20
          transition-all duration-400 ease-cinematic
          cursor-pointer
        "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={toggle}
      >
        {/* Video element */}
        <video
          ref={videoRef}
          src={video.src}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          loop
          onEnded={() => setPlaying(false)}
        />

        {/* Cinematic dark overlay */}
        <div
          className={`
          absolute inset-0
          bg-gradient-to-t from-ink/90 via-ink/30 to-transparent
          transition-opacity duration-400
          ${playing ? "opacity-30" : "opacity-100"}
        `}
        />

        {/* Top gradient for genre badge */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent" />

        {/* Genre badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="
            font-mono text-[8px] tracking-[0.25em] uppercase
            text-gold border border-gold/25 bg-ink/50
            rounded-full px-2.5 py-1
            backdrop-blur-sm
          "
          >
            {video.genre}
          </span>
        </div>

        {/* Numbering */}
        <div className="absolute top-3 right-3 z-10">
          <span className="font-mono text-[9px] text-silver/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Play / Pause button */}
        <div
          className={`
          absolute inset-0 flex items-center justify-center z-10
          transition-opacity duration-300
          ${playing && !hovered ? "opacity-0" : "opacity-100"}
        `}
        >
          <div
            className={`
            w-14 h-14 rounded-full
            flex items-center justify-center
            text-ink text-lg font-bold
            shadow-[0_8px_32px_rgba(201,168,76,0.4)]
            transition-all duration-300 ease-cinematic
            ${
              playing
                ? "bg-gold/80 scale-90"
                : "bg-gold group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(201,168,76,0.6)]"
            }
          `}
          >
            {playing ? "❙❙" : "▶"}
          </div>
        </div>

        {/* Bottom label */}
        <div
          className="
          absolute bottom-0 left-0 right-0 p-4 z-10
          translate-y-1 group-hover:translate-y-0
          transition-transform duration-400 ease-cinematic
        "
        >
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-mist">
            {video.label}
          </p>
          <div className="mt-1.5 w-8 h-px bg-gradient-to-r from-gold to-transparent" />
        </div>

        {/* Border glow */}
        <div
          className={`
          absolute inset-0 rounded-card pointer-events-none
          transition-all duration-400
          ${hovered ? "shadow-[inset_0_0_0_1px_rgba(201,168,76,0.25)]" : ""}
        `}
        />
      </div>
    </RevealBlock>
  );
};

/* ── Monologue Section ── */
const Monologue = () => (
  <section
    id="monologues"
    className="py-24"
    style={{
      background:
        "radial-gradient(ellipse 70% 60% at 80% 30%, rgba(201,168,76,0.06), transparent)",
    }}
  >
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <RevealBlock>
        <SectionLabel>Performance</SectionLabel>
      </RevealBlock>

      <RevealBlock delay={80}>
        <DisplayHeading>Monologues</DisplayHeading>
      </RevealBlock>

      <RevealBlock delay={130}>
        <p className="font-body text-mist text-lg max-w-2xl mb-3 leading-relaxed">
          Obafemi Oniosun is a lover of opportunities and a fast learner who
          believes his dexterity as an actor and screenwriter can take him to
          the next level in every facet of life. He is also keen on imparting
          the audience with a high level of positivity and hope.
        </p>
        <p className="font-body text-mist text-lg max-w-2xl mb-12 leading-relaxed">
          A versatile actor ready to collaborate and learn more — here are some
          of his monologues.
        </p>
      </RevealBlock>

      {/* Video grid — 3 column on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {VIDEOS.map((video, i) => (
          <VideoCard key={video.src} video={video} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Monologue;
