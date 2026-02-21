import React, { useState, useEffect, useCallback } from 'react';
import { RevealBlock, SectionLabel, DisplayHeading, GoldDivider } from './UI';

const HEADSHOTS = [
  { src: '/Headshot1.jpeg', label: 'Headshot 01', year: '2024' },
  { src: '/Headshot2.jpeg', label: 'Headshot 02', year: '2024' },
  { src: '/Headshot3.jpeg', label: 'Headshot 03', year: '2024' },
  { src: '/Headshot4.jpeg', label: 'Headshot 04', year: '2024' },
  { src: '/Headshot5.jpeg', label: 'Headshot 05', year: '2024' },
];

const OTHER_LOOKS = [
  { src: '/looks1.jpeg',  label: 'Look 01' },
  { src: '/looks2.jpeg',  label: 'Look 02' },
  { src: '/looks3.jpeg',  label: 'Look 03' },
  { src: '/looks4.jpeg',  label: 'Look 04' },
  { src: '/looks5.jpeg',  label: 'Look 05' },
  { src: '/looks6.jpeg',  label: 'Look 06' },
  { src: '/looks7.jpeg',  label: 'Look 07' },
  { src: '/looks8.jpeg',  label: 'Look 08' },
  { src: '/looks9.jpeg',  label: 'Look 09' },
];

/* ── Lightbox ── */
const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    document.body.classList.add('lightbox-open');
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, prev, next]);

  const img = images[current];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ animation: 'fadeUp 0.3s ease forwards' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/95 backdrop-blur-2xl"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full mx-6 flex flex-col items-center gap-4">

        {/* Image */}
        <div className="relative rounded-card-lg overflow-hidden border border-white/[0.07] shadow-[0_32px_80px_rgba(0,0,0,0.8)]">
          <img
            src={img.src}
            alt={img.label}
            className="max-h-[75vh] w-auto object-contain"
            style={{ transition: 'opacity 0.25s ease' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Caption */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold">
            {img.label}
          </span>
          {img.year && (
            <span className="font-mono text-[9px] tracking-[0.2em] text-silver/50">
              {img.year}
            </span>
          )}
          <span className="font-mono text-[9px] text-silver/40">
            {current + 1} / {images.length}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="
              w-11 h-11 rounded-full border border-white/[0.1]
              flex items-center justify-center
              text-silver hover:text-gold hover:border-gold/30
              transition-all duration-300
            "
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`
                  rounded-full transition-all duration-300
                  ${i === current ? 'w-5 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-silver/30'}
                `}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="
              w-11 h-11 rounded-full border border-white/[0.1]
              flex items-center justify-center
              text-silver hover:text-gold hover:border-gold/30
              transition-all duration-300
            "
          >
            →
          </button>
        </div>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="
          absolute top-6 right-6 z-20
          w-10 h-10 flex items-center justify-center
          font-mono text-xl text-silver hover:text-gold
          border border-white/[0.08] rounded-full
          hover:border-gold/30
          transition-all duration-300
        "
      >
        ×
      </button>
    </div>
  );
};

/* ── Single gallery image card ── */
const GalleryCard = ({ image, index, images, aspect = 'aspect-[3/4]', featured = false }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <RevealBlock
        delay={index * 50}
        className={`${featured ? 'md:row-span-2' : ''}`}
      >
        <div
          onClick={() => setLightboxOpen(true)}
          className={`
            group relative overflow-hidden rounded-card
            border border-white/[0.05]
            cursor-pointer
            ${featured ? 'h-full min-h-[400px]' : aspect}
          `}
        >
          {/* Image */}
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

          {/* Hover overlay */}
          <div className="
            absolute inset-0
            bg-gradient-to-t from-ink/80 via-ink/20 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-400
          " />

          {/* Label reveal */}
          <div className="
            absolute bottom-0 left-0 right-0 p-4
            translate-y-3 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-400 ease-cinematic
          ">
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold mb-0.5">
              {image.label}
            </p>
            {image.year && (
              <p className="font-mono text-[8px] text-silver/60 tracking-wider">
                {image.year}
              </p>
            )}
          </div>

          {/* Zoom icon */}
          <div className="
            absolute top-3 right-3
            w-8 h-8 rounded-full border border-white/20
            flex items-center justify-center
            text-white/60 text-sm
            opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100
            transition-all duration-300 ease-cinematic
            bg-ink/40 backdrop-blur-sm
          ">
            ⤢
          </div>
        </div>
      </RevealBlock>

      {lightboxOpen && (
        <Lightbox
          images={images}
          startIndex={index}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

/* ── ImageGallery ── */
const ImageGallery = () => (
  <section
    id="gallery"
    className="py-24"
    style={{
      background: 'radial-gradient(ellipse 80% 50% at 80% 50%, rgba(201,168,76,0.05), transparent)',
    }}
  >
    <div className="max-w-6xl mx-auto px-6 md:px-8">

      {/* Headshots */}
      <RevealBlock>
        <SectionLabel>Portfolio</SectionLabel>
      </RevealBlock>
      <RevealBlock delay={80}>
        <DisplayHeading>Headshots</DisplayHeading>
      </RevealBlock>
      <RevealBlock delay={120}>
        <p className="font-body text-mist text-lg mb-10 max-w-xl leading-relaxed">
          Professional headshots capturing range, presence, and the depth of character that Obafemi brings to every role.
        </p>
      </RevealBlock>

      {/* Masonry headshot grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6"
        style={{ gridAutoRows: '280px' }}
      >
        {HEADSHOTS.map((img, i) => (
          <GalleryCard
            key={img.src}
            image={img}
            index={i}
            images={HEADSHOTS}
            featured={i === 0}
            aspect="aspect-[3/4]"
          />
        ))}
      </div>

      <GoldDivider className="my-20" />

      {/* Other looks */}
      <RevealBlock>
        <SectionLabel>Character Range</SectionLabel>
      </RevealBlock>
      <RevealBlock delay={60}>
        <DisplayHeading>Other Looks</DisplayHeading>
      </RevealBlock>
      <RevealBlock delay={100}>
        <p className="font-body text-mist text-lg mb-10 max-w-xl leading-relaxed">
          A versatile actor in every frame — from intensity to warmth, stillness to movement.
        </p>
      </RevealBlock>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        style={{ gridAutoRows: '300px' }}
      >
        {OTHER_LOOKS.map((img, i) => (
          <GalleryCard
            key={img.src}
            image={img}
            index={i}
            images={OTHER_LOOKS}
            featured={i === 4}
            aspect="aspect-[3/4]"
          />
        ))}
      </div>

    </div>
  </section>
);

export default ImageGallery;
