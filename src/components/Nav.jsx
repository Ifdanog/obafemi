import React, { useState, useEffect, useRef } from "react";
import { useActiveSection } from "../hooks/useScrollReveal";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "scripts", label: "Scripts" },
  { id: "gallery", label: "Gallery" },
  { id: "monologues", label: "Monologues" },
  { id: "bts", label: "BTS" },
  { id: "scavenger", label: "Scavenger" },
  { id: "credits", label: "Credits" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));
  const indicatorRef = useRef(null);
  const navRef = useRef(null);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* move gold underline to active item */
  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;
    const activeEl = navRef.current.querySelector(`[data-id="${active}"]`);
    if (!activeEl) return;
    const { offsetLeft, offsetWidth } = activeEl;
    indicatorRef.current.style.left = `${offsetLeft}px`;
    indicatorRef.current.style.width = `${offsetWidth}px`;
  }, [active]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`
          fixed w-full top-0 z-[100]
          border-b border-white/[0.06]
          transition-all duration-500
          ${
            scrolled
              ? "bg-ink/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-ink/70 backdrop-blur-xl"
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-2xl tracking-widest text-pearl hover:text-gold transition-colors duration-300"
          >
            Obafemi Oniosun
          </button>

          {/* Desktop links */}
          <div ref={navRef} className="hidden md:flex items-center relative">
            {/* animated underline */}
            <span
              ref={indicatorRef}
              className="absolute bottom-0 h-[2px] bg-gold rounded-full transition-all duration-300 ease-cinematic"
              style={{ left: 0, width: 0 }}
            />

            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                data-id={item.id}
                onClick={() => scrollTo(item.id)}
                className={`
                  font-mono text-[10px] tracking-[0.25em] uppercase
                  px-4 py-5 transition-colors duration-300
                  ${
                    active === item.id
                      ? "text-gold"
                      : "text-silver hover:text-mist"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 text-silver hover:text-gold transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden overflow-hidden border-t border-white/[0.05]
            transition-all duration-500 ease-cinematic
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-6 py-4 flex flex-col gap-1 bg-ash/95 backdrop-blur-2xl">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`
                  font-mono text-[10px] tracking-[0.3em] uppercase
                  text-left py-3 border-b border-white/[0.04] last:border-0
                  transition-colors duration-200
                  ${active === item.id ? "text-gold" : "text-silver"}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
