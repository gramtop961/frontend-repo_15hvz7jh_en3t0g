import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden bg-neutral-950 text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-950 to-neutral-950" />

      {/* Decorative lines */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1000px_400px_at_50%_-10%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(600px_200px_at_80%_10%,rgba(34,197,94,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start gap-8">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm tracking-wide text-white/80 backdrop-blur">
            Modern Architecture • Bespoke Spaces
          </span>
          <h1 className="font-manrope text-4xl leading-tight text-white sm:text-6xl">
            Timeless, minimalist design
            <br className="hidden sm:block" />
            for spaces that inspire.
          </h1>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            I craft refined, sustainable environments that balance light, material, and proportion. Explore selected work and get in touch to shape your next project.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/90">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>

      {/* Subtle image collage background */}
      <div className="pointer-events-none absolute right-[-10%] top-10 hidden h-[600px] w-[900px] rotate-6 overflow-hidden rounded-3xl border border-white/10 opacity-30 shadow-2xl md:block">
        <img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
          alt="Modern architecture"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
