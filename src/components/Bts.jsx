import React, { useState } from 'react';
import { RevealBlock, SectionLabel, DisplayHeading } from './UI';

const BTS_IMAGES = [
  { src: '/IMG_0731.JPG', label: 'On Set 01' },
  { src: '/IMG_0732.JPG', label: 'On Set 02' },
  { src: '/IMG_2068.PNG', label: 'Production 01' },
  { src: '/IMG_2073.PNG', label: 'Production 02' },
  { src: '/IMG_2085.PNG', label: 'Production 03' },
  { src: '/IMG_2717.JPG', label: 'Behind the Lens 01' },
  { src: '/IMG_2722.JPG', label: 'Behind the Lens 02' },
  { src: '/IMG_2732.JPG', label: 'On Set 03' },
  { src: '/IMG_2741.JPG', label: 'On Set 04' },
  { src: '/IMG_2743.JPG', label: 'Set Life 01' },
  { src: '/IMG_2744.JPG', label: 'Set Life 02' },
];

/* ── BTS photo card ── */
const BtsCard = ({ image, index, featured = false, onClick }) => (
  <RevealBlock delay={index * 45} className={featured ? 'md:col-span-2 md:row-span-2' : ''}>
    <div
      onClick={() => onClick(index)}
      className="
        group relative overflow-hidden rounded-card
        border border-white/[0.05]
        cursor-pointer
        w-full h-full min-h-[200px]
      "
    >
      <img
        src={image.src}
        alt={image.label}
        loading="lazy"
        className="
          absolute inset-0 w-full h-full object-cover
          group-hover:scale-[1.07]
          transition-transform duration-700 ease-cinematic
        "
      />

      {/* Gradient overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-t from-ink/75 via-transparent to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-400
      " />

      {/* Label */}
      <div className="
        absolute bottom-0 left-0 right-0 p-3
        translate-y-2 opacity-0
        group-hover:translate-y-0 group-hover:opacity-100
        transition-all duration-400 ease-cinematic
      ">
        <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-gold">
          {image.label}
        </p>
      </div>

      {/* Corner accent */}
      <div className="
        absolute top-2 right-2
        w-5 h-5
        border-t-2 border-r-2 border-gold/30
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      " />
    </div>
  </RevealBlock>
);

/* ── Bts Section ── */
const Bts = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section
      id="bts"
      className="py-24"
      style={{
        background: 'radial-gradient(ellipse 60% 50% at 30% 60%, rgba(26,95,106,0.08), transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        <RevealBlock>
          <SectionLabel>On Set</SectionLabel>
        </RevealBlock>

        <RevealBlock delay={80}>
          <DisplayHeading>Behind the Scenes</DisplayHeading>
        </RevealBlock>

        <RevealBlock delay={130}>
          <p className="font-body text-mist text-lg max-w-2xl mb-12 leading-relaxed">
            Six years in the filmmaking business — and still hungry to grow, pick up new skills, and push the art of storytelling further. These are moments from the sets that shaped him.
          </p>
        </RevealBlock>

        {/* Asymmetric masonry grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          style={{ gridAutoRows: '200px' }}
        >
          {BTS_IMAGES.map((img, i) => (
            <BtsCard
              key={img.src}
              image={img}
              index={i}
              featured={i === 0 || i === 6}
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
            <div
              className="absolute inset-0 bg-ink/95 backdrop-blur-2xl"
              onClick={() => setLightboxIndex(null)}
            />
            <div className="relative z-10 max-w-3xl w-full mx-6">
              <div className="rounded-card-lg overflow-hidden border border-white/[0.07] shadow-[0_32px_80px_rgba(0,0,0,0.8)]">
                <img
                  src={BTS_IMAGES[lightboxIndex].src}
                  alt={BTS_IMAGES[lightboxIndex].label}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>

              <div className="flex justify-between items-center mt-4 px-2">
                <button
                  onClick={() => setLightboxIndex((i) => (i - 1 + BTS_IMAGES.length) % BTS_IMAGES.length)}
                  className="
                    w-10 h-10 rounded-full border border-white/10
                    flex items-center justify-center
                    text-silver hover:text-gold hover:border-gold/30
                    transition-all duration-300
                  "
                >←</button>

                <span className="font-mono text-[9px] tracking-[0.3em] text-gold">
                  {BTS_IMAGES[lightboxIndex].label}
                </span>

                <button
                  onClick={() => setLightboxIndex((i) => (i + 1) % BTS_IMAGES.length)}
                  className="
                    w-10 h-10 rounded-full border border-white/10
                    flex items-center justify-center
                    text-silver hover:text-gold hover:border-gold/30
                    transition-all duration-300
                  "
                >→</button>
              </div>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="
                absolute top-6 right-6 z-20
                w-10 h-10 flex items-center justify-center
                font-mono text-xl text-silver hover:text-gold
                border border-white/[0.08] rounded-full
                hover:border-gold/30 transition-all duration-300
              "
            >×</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Bts;
