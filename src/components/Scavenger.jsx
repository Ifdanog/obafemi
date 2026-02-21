import React, { useState } from 'react';
import { RevealBlock, SectionLabel, DisplayHeading, Badge } from './UI';

const SCAVENGER_IMAGES = [
  { src: '/IMG_2999.JPG', label: 'Scene 01' },
  { src: '/IMG_3019.JPG', label: 'Scene 02' },
  { src: '/IMG_3025.JPG', label: 'Behind the Camera' },
  { src: '/IMG_3034.JPG', label: 'On Set' },
  { src: '/IMG_3064.JPG', label: 'Scene 03' },
  { src: '/IMG_3090.JPG', label: 'Production' },
  { src: '/IMG_3115.JPG', label: 'Wrap' },
];

/* ── Scavenger image card ── */
const ScavengerCard = ({ image, index, span = false, onClick }) => (
  <RevealBlock delay={index * 50} className={span ? 'md:col-span-2' : ''}>
    <div
      onClick={() => onClick(index)}
      className="
        group relative overflow-hidden rounded-card
        border border-white/[0.05] cursor-pointer
        aspect-[4/3]
      "
    >
      <img
        src={image.src}
        alt={image.label}
        loading="lazy"
        className="
          absolute inset-0 w-full h-full object-cover
          group-hover:scale-[1.06]
          transition-transform duration-700 ease-cinematic
        "
      />
      <div className="
        absolute inset-0
        bg-gradient-to-t from-ink/80 via-ink/20 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-400
      " />
      <div className="
        absolute bottom-0 left-0 right-0 p-3
        translate-y-2 opacity-0
        group-hover:translate-y-0 group-hover:opacity-100
        transition-all duration-400 ease-cinematic
      ">
        <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-gold">{image.label}</p>
      </div>
    </div>
  </RevealBlock>
);

const Scavenger = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section
      id="scavenger"
      className="py-24 relative"
      style={{
        background: 'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(201,168,76,0.05), transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        <RevealBlock>
          <SectionLabel>Debut Short Film</SectionLabel>
        </RevealBlock>

        <RevealBlock delay={80}>
          <DisplayHeading>Scavenger</DisplayHeading>
        </RevealBlock>

        {/* Info card */}
        <RevealBlock delay={130}>
          <div className="
            flex flex-wrap items-start gap-8 mb-12
            p-6 md:p-8
            bg-gradient-to-br from-slate to-ghost
            border border-white/[0.07] rounded-card-lg
            relative overflow-hidden
          ">
            {/* top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="flex-1 min-w-[220px]">
              <p className="font-body text-mist text-lg leading-relaxed">
                In 2021, Obafemi shot his first ever short film — <em className="text-pearl">Scavenger</em> — written and produced by him, and directed by Olushola Animashaun. The movie is yet to be released. These are behind-the-scenes moments from the production.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-right shrink-0">
              <div>
                <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-gold mb-1">Written & Produced By</p>
                <p className="font-body text-pearl font-semibold">Oniosun Obafemi</p>
              </div>
              <div>
                <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-gold mb-1">Directed By</p>
                <p className="font-body text-pearl font-semibold">Olushola Animashaun</p>
              </div>
              <div>
                <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-gold mb-1">Year</p>
                <p className="font-body text-pearl font-semibold">2021</p>
              </div>
              <Badge variant="teal">Unreleased</Badge>
            </div>
          </div>
        </RevealBlock>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {SCAVENGER_IMAGES.map((img, i) => (
            <ScavengerCard
              key={img.src}
              image={img}
              index={i}
              span={i === 0}
              onClick={setLightboxIndex}
            />
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ animation: 'fadeUp 0.3s ease forwards' }}
          >
            <div className="absolute inset-0 bg-ink/95 backdrop-blur-2xl" onClick={() => setLightboxIndex(null)} />
            <div className="relative z-10 max-w-3xl w-full mx-6">
              <div className="rounded-card-lg overflow-hidden border border-white/[0.07] shadow-[0_32px_80px_rgba(0,0,0,0.8)]">
                <img
                  src={SCAVENGER_IMAGES[lightboxIndex].src}
                  alt={SCAVENGER_IMAGES[lightboxIndex].label}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>
              <div className="flex justify-between items-center mt-4 px-2">
                <button
                  onClick={() => setLightboxIndex((i) => (i - 1 + SCAVENGER_IMAGES.length) % SCAVENGER_IMAGES.length)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver hover:text-gold hover:border-gold/30 transition-all duration-300"
                >←</button>
                <span className="font-mono text-[9px] tracking-[0.3em] text-gold">
                  {SCAVENGER_IMAGES[lightboxIndex].label}
                </span>
                <button
                  onClick={() => setLightboxIndex((i) => (i + 1) % SCAVENGER_IMAGES.length)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver hover:text-gold hover:border-gold/30 transition-all duration-300"
                >→</button>
              </div>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center font-mono text-xl text-silver hover:text-gold border border-white/[0.08] rounded-full hover:border-gold/30 transition-all duration-300"
            >×</button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Scavenger;
