import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-manrope text-lg font-semibold tracking-tight">Studio</a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#projects">Work</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-neutral-200 bg-white py-10 text-neutral-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Studio — All rights reserved.</p>
          <div className="text-sm">Modern architecture • Classy, minimal</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
