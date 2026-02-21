import React, { useState } from "react";
import { RevealBlock, SectionLabel, DisplayHeading } from "./UI";

const CREDITS = [
  {
    num: "01",
    role: "Ezra Dike",
    project: "Pastor's Mrs",
    director: "Anddykin",
    production: "Millennials Media TV",
    type: "TV Series",
    status: "released",
  },
  {
    num: "02",
    role: "Afam",
    project: "Love and Crown",
    director: "ZillaFrosh",
    production: "ZillaFroshTV (YouTube)",
    type: "Web Series",
    status: "released",
  },
  {
    num: "03",
    role: "Sac",
    project: "The New Footballer",
    director: "Enero Sunday Emmanuel",
    production: "ITACH Creative Production",
    type: "Short Film",
    status: "unreleased",
  },
  {
    num: "04",
    role: "Amzat",
    project: "Wire Transfer",
    director: "Kurokeme Owoupele",
    production: "Kuros Studios",
    type: "Short Film",
    status: "unreleased",
  },
  {
    num: "05",
    role: "Richard",
    project: "Girls Zone",
    director: "Enero Sunday Emmanuel",
    production: "ITACH Creative Production",
    type: "Short Film",
    status: "released",
  },
  {
    num: "06",
    role: "Olu",
    project: "Fate of Adiva",
    director: "Shola Animashaun",
    production: "Busayo Balogun Film Production",
    type: "Feature Film",
    status: "released",
  },
  {
    num: "07",
    role: "Personal Assistant",
    project: "Visa On Arrival (S7, E2)",
    director: "Bovi Ugboma",
    production: "Accelerate TV",
    type: "TV Series",
    status: "released",
    featured: true,
  },
  {
    num: "08",
    role: "AEF Staff",
    project: "Omera (AM Series)",
    director: "Femi D. Ogunsanwo",
    production: "House Gabriel Studios",
    type: "TV Series",
    status: "released",
    featured: true,
  },
  {
    num: "09",
    role: "Entity",
    project: "The Beacon Man",
    director: "Mark Adebesin",
    production: "Ibukun Rolat Abiola",
    type: "Short Film",
    status: "released",
  },
  {
    num: "10",
    role: "Day Player",
    project: "The Unusual Flatmates",
    director: "Ayobami Gbadebo",
    production: "Sunkant Entertainment",
    type: "TV Series",
    status: "released",
  },
  {
    num: "11",
    role: "Day Player",
    project: "Apo (AM Series — Showmax)",
    director: "Tope Adebayo",
    production: "Yewande Adekoya TV",
    type: "TV Series",
    status: "released",
    featured: true,
  },
];

/* ── Status badge ── */
const StatusBadge = ({ status }) => (
  <span
    className={`
    font-mono text-[8px] tracking-[0.2em] uppercase
    border rounded-full px-2 py-0.5
    ${
      status === "released"
        ? "text-emerald-400 border-emerald-400/25 bg-emerald-400/[0.06]"
        : "text-amber-400 border-amber-400/25 bg-amber-400/[0.06]"
    }
  `}
  >
    {status}
  </span>
);

/* ── Type badge ── */
const TypeBadge = ({ type }) => (
  <span
    className="
    font-mono text-[8px] tracking-[0.15em] uppercase
    text-silver/50 border border-white/[0.07] rounded-full px-2 py-0.5
  "
  >
    {type}
  </span>
);

/* ── Table row ── */
const CreditRow = ({ credit, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <tr
      className={`
          border-b border-white/[0.04] last:border-0
          transition-all duration-300 ease-cinematic
          ${
            credit.featured
              ? "bg-gold/[0.03]"
              : hovered
              ? "bg-white/[0.025]"
              : ""
          }
        `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number */}
      <td className="w-[48px] py-4 pl-6 pr-3 hidden md:table-cell">
        <span className="font-mono text-[10px] text-gold/40 select-none">
          {credit.num}
        </span>
      </td>

      {/* Role */}
      <td className="w-[22%] py-4 px-3">
        <span
          className="
            inline-flex items-center gap-1.5
            font-mono text-[9px] tracking-[0.15em] uppercase
            text-gold border border-gold/20 bg-gold/[0.07]
            rounded px-2.5 py-1
          "
        >
          {credit.featured && (
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
          )}
          {credit.role}
        </span>
      </td>

      {/* Project */}
      <td className="w-[22%] py-4 px-3">
        <div>
          <p
            className={`
              font-body text-base leading-tight
              transition-colors duration-300
              ${hovered ? "text-pearl" : "text-mist"}
            `}
          >
            {credit.project}
          </p>
          <div className="mt-1 md:hidden">
            <TypeBadge type={credit.type} />
          </div>
        </div>
      </td>

      {/* Type - desktop */}
      <td className="w-[10%] py-4 px-3 hidden md:table-cell">
        <TypeBadge type={credit.type} />
      </td>

      {/* Director */}
      <td className="w-[14%] py-4 px-3 hidden lg:table-cell">
        <p className="font-body text-sm text-silver">{credit.director}</p>
      </td>

      {/* Production */}
      <td className="w-[14%] py-4 px-3 hidden lg:table-cell">
        <p className="font-body text-sm text-silver/70">{credit.production}</p>
      </td>

      {/* Status */}
      <td className="w-[10%] py-4 px-3 pr-6">
        <StatusBadge status={credit.status} />
      </td>
    </tr>
  );
};

/* ── FilmCredit Section ── */
const FilmCredit = () => (
  <section
    id="credits"
    className="py-24"
    style={{
      background:
        "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(201,168,76,0.05), transparent)",
    }}
  >
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <RevealBlock>
        <SectionLabel>Filmography</SectionLabel>
      </RevealBlock>

      <RevealBlock delay={80}>
        <DisplayHeading>Film Credits</DisplayHeading>
      </RevealBlock>

      <RevealBlock delay={130}>
        <p className="font-body text-mist text-lg max-w-2xl mb-12 leading-relaxed">
          From television series and web productions to short films and feature
          releases — a growing body of work across the Nigerian film industry.
        </p>
      </RevealBlock>

      {/* Stats row */}
      <RevealBlock delay={160}>
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { num: "11", label: "Productions" },
            { num: "6+", label: "Years Active" },
            { num: "4", label: "Networks" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="
                text-center p-5
                bg-gradient-to-br from-slate to-ghost
                border border-white/[0.06] rounded-card
                relative overflow-hidden
              "
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
              <p className="font-display text-5xl text-gradient-gold mb-1">
                {stat.num}
              </p>
              <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-silver">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </RevealBlock>

      {/* Table */}
      <RevealBlock delay={200}>
        <div
          className="
          rounded-card-lg overflow-hidden
          border border-white/[0.06]
          bg-gradient-to-br from-slate/80 to-ghost/80
          relative
        "
        >
          {/* top shimmer */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b border-gold/15">
                  <th className="w-[48px] py-4 pl-6 pr-3 text-left hidden md:table-cell">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/60">
                      #
                    </span>
                  </th>
                  <th className="w-[22%] py-4 px-3 text-left">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/60">
                      Character
                    </span>
                  </th>
                  <th className="w-[22%] py-4 px-3 text-left">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/60">
                      Project
                    </span>
                  </th>
                  <th className="w-[10%] py-4 px-3 text-left hidden md:table-cell">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/60">
                      Type
                    </span>
                  </th>
                  <th className="w-[14%] py-4 px-3 text-left hidden lg:table-cell">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/60">
                      Director
                    </span>
                  </th>
                  <th className="w-[14%] py-4 px-3 text-left hidden lg:table-cell">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/60">
                      Production
                    </span>
                  </th>
                  <th className="w-[10%] py-4 px-3 pr-6 text-left">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/60">
                      Status
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {CREDITS.map((credit, i) => (
                  <CreditRow key={credit.num} credit={credit} index={i} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </RevealBlock>
    </div>
  </section>
);

export default FilmCredit;
