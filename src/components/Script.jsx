import React, { useState } from 'react';
import { RevealBlock, SectionLabel, DisplayHeading, Badge } from './UI';

/* ── Script data with rich metadata ── */
const SCRIPTS = [
  {
    path:  '/CRISIS.pdf',
    title: 'Crisis',
    genre: 'Short Film',
    type:  'drama',
    description: 'A story about pressure, identity, and decision-making under fire. Two characters. One room. No escaping the truth.',
    pages: '12',
  },
  {
    path:  '/ADDENDUM.pdf',
    title: 'Addendum',
    genre: 'Short Film',
    type:  'thriller',
    description: 'A late-night discovery unravels a carefully constructed life. What gets added can never be removed.',
    pages: '9',
  },
  {
    path:  '/FIRST_MONOLOGUE.pdf',
    title: 'First Monologue',
    genre: 'Monologue',
    type:  'monologue',
    description: 'An introspective piece exploring the voice one hears before every great risk—and the silence that follows.',
    pages: '3',
  },
  {
    path:  '/LOVE_TRIANGLE.pdf',
    title: 'Love Triangle',
    genre: 'Feature Film',
    type:  'romance',
    description: 'Three people, two choices, one turning point. A story about what love costs when it is shared.',
    pages: '28',
  },
  {
    path:  '/MOTHER_NARRATION.pdf',
    title: 'Mother Narration',
    genre: 'Monologue',
    type:  'monologue',
    description: 'A mother speaks for the first time about what she carried in silence. Tender, devastating, true.',
    pages: '4',
  },
  {
    path:  '/BENEATHE_HER_SILENCE.pdf',
    title: 'Beneath Her Silence',
    genre: 'Short Film',
    type:  'drama',
    description: 'An internal landscape explored through restrained performance. Grief wears many faces—this one is quiet.',
    pages: '14',
  },
  {
    path:  '/BEYOND_THE_SCAR.pdf',
    title: 'Beyond the Scar',
    genre: 'Short Film',
    type:  'drama',
    description: 'Healing, memory, and what remains after trauma. A character study about the body and the stories it holds.',
    pages: '11',
  },
  {
    path:  '/FATHER_FIGURE.pdf',
    title: 'Father Figure',
    genre: 'Short Film',
    type:  'drama',
    description: 'What happens to boys who grow up without maps? A story about absence, improvisation, and becoming.',
    pages: '15',
  },
  {
    path:  '/I_LEARNED_TO_LIE_EARLY.pdf',
    title: 'I Learned to Lie Early',
    genre: 'Monologue',
    type:  'monologue',
    description: 'A confessional piece about childhood survival. Spoken directly to the audience with no apology.',
    pages: '5',
  },
  {
    path:  '/IDOJUKOMI.pdf',
    title: 'Idojukomi',
    genre: 'Feature Film',
    type:  'drama',
    description: 'A Yoruba-infused narrative about confrontation — with the past, with family, and with self. An unflinching portrait.',
    pages: '32',
  },
];

const FILTERS = [
  { id: 'all',       label: 'All Works' },
  { id: 'drama',     label: 'Drama' },
  { id: 'monologue', label: 'Monologue' },
  { id: 'thriller',  label: 'Thriller' },
  { id: 'romance',   label: 'Romance' },
];

const GENRE_COLORS = {
  drama:     'text-blue-300  border-blue-400/20  bg-blue-400/[0.06]',
  monologue: 'text-gold      border-gold/25      bg-gold/[0.07]',
  thriller:  'text-red-300   border-red-400/20   bg-red-400/[0.06]',
  romance:   'text-pink-300  border-pink-400/20  bg-pink-400/[0.06]',
};

/* ── Script card ── */
const ScriptCard = ({ script, index }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      const blob = await fetch(script.path).then((r) => r.blob());
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${script.title.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error('Download failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <RevealBlock delay={index * 60}>
      <div className="
        group relative
        bg-gradient-to-br from-slate to-ghost
        border border-white/[0.06]
        rounded-card-lg p-6
        hover:border-gold/20
        hover:-translate-y-1
        hover:shadow-card-hover
        transition-all duration-400 ease-cinematic
        overflow-hidden
        flex flex-col
        h-full
      ">
        {/* top shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* ambient glow on hover */}
        <div className="
          absolute -bottom-10 -right-10 w-32 h-32 rounded-full
          bg-gold/[0.05] blur-2xl
          group-hover:bg-gold/[0.12]
          transition-all duration-600
          pointer-events-none
        " />

        {/* Genre badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`
            font-mono text-[9px] tracking-[0.25em] uppercase
            border rounded-full px-2.5 py-1
            ${GENRE_COLORS[script.type] || GENRE_COLORS.drama}
          `}>
            {script.genre}
          </span>
          <span className="font-mono text-[9px] text-silver/50 tracking-wider">
            {script.pages}p
          </span>
        </div>

        {/* Title */}
        <h3 className="
          font-display text-2xl tracking-wide
          text-pearl group-hover:text-gradient-gold
          mb-3 leading-tight
          transition-all duration-300
        ">
          {script.title}
        </h3>

        {/* Description */}
        <p className="font-body text-silver text-[15px] leading-relaxed flex-1 mb-5">
          {script.description}
        </p>

        {/* Download button */}
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="
            w-full flex items-center justify-center gap-2
            font-mono text-[9px] tracking-[0.25em] uppercase
            border border-gold/25 text-gold
            rounded-card px-4 py-3
            hover:bg-gold/10 hover:border-gold/50
            active:scale-[0.98]
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-wait
            group/btn
          "
        >
          <span className="group-hover/btn:-translate-y-0.5 transition-transform duration-200">
            {downloading ? '...' : '↓'}
          </span>
          {downloading ? 'Downloading' : 'Download Script'}
        </button>
      </div>
    </RevealBlock>
  );
};

/* ── Script Section ── */
const Script = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? SCRIPTS
    : SCRIPTS.filter((s) => s.type === activeFilter);

  return (
    <section
      id="scripts"
      className="py-24"
      style={{
        background: 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(26,95,106,0.07), transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        <RevealBlock>
          <SectionLabel>Written Works</SectionLabel>
        </RevealBlock>

        <RevealBlock delay={80}>
          <DisplayHeading>Scripts & Screenplays</DisplayHeading>
        </RevealBlock>

        <RevealBlock delay={140}>
          <p className="font-body text-mist text-lg max-w-2xl mb-10 leading-relaxed">
            From intimate monologues to feature-length narratives, each script represents a world built from language, rhythm, and the spaces between words.
          </p>
        </RevealBlock>

        {/* Filter tabs */}
        <RevealBlock delay={180}>
          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-white/[0.06]">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`
                  font-mono text-[9px] tracking-[0.25em] uppercase
                  px-4 py-2 rounded-full border
                  transition-all duration-300
                  ${activeFilter === f.id
                    ? 'text-ink bg-gold border-gold shadow-gold-sm'
                    : 'text-silver border-white/[0.08] hover:border-gold/30 hover:text-mist'}
                `}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealBlock>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((script, i) => (
            <ScriptCard key={script.path} script={script} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Script;
