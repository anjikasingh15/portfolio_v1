import React from 'react';
import projectMarketplace from '../assets/project-marketplace.png';
import projectAuction from '../assets/project-auction.png';
import projectHeart from '../assets/project-heart.png';
import project1 from '../assets/project-1.png';
import TechOrbit from './TechOrbit';
import '../hero.css';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary opacity-10 blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-secondary opacity-10 blur-[150px] -z-10 animate-pulse"></div>

      <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="reveal active">
          <h2 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-[0.2em] text-text-primary opacity-80">
            Hi, My Name Is
          </h2>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            <span className="text-accent-primary">Anjika Singh</span><br />
            <span className="text-white">I am a Software Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-xl leading-relaxed">
            <span className="font-bold text-text-primary">1+ years</span> of making the job done in the <span className="text-accent-primary font-bold">Tech industry</span>!<br />
            I am a product-oriented Software Engineer with a business mindset
            from bringing the latest tech to launching successful platforms!
          </p>

          <a href="#projects" className="btn btn-primary px-10 py-5 text-lg rounded-xl flex items-center gap-3 w-fit shadow-xl shadow-accent-primary/20 hover:scale-105 transition-transform">
            Lets Get Started!
          </a>
        </div>

        <div className="reveal active hidden md:block relative">
          <div className="hero-visual-container flex justify-center items-center">
            <TechOrbit />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
