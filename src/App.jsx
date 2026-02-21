import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Script from './components/Script';
import ImageGallery from './components/ImageGallery';
import Monologue from './components/Monologue';
import Bts from './components/Bts';
import Scavenger from './components/Scavenger';
import FilmCredit from './components/FilmCredit';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-atmosphere min-h-screen relative">

      {/* Fixed left filmstrip */}
      <div className="filmstrip-left" aria-hidden="true" />

      {/* Sticky navigation */}
      <Nav />

      {/* Main content */}
      <main>
        {/* Hero + Bio */}
        <Hero />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* Scripts & Screenplays */}
        <Script />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

        {/* Headshots & Gallery */}
        <ImageGallery />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* Monologues */}
        <Monologue />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

        {/* BTS Photos */}
        <Bts />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* Scavenger short film */}
        <Scavenger />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

        {/* Film Credits */}
        <FilmCredit />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
