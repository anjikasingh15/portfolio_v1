import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import heroGraphic from '../assets/hero-graphic.png';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-primary opacity-20 blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-secondary opacity-20 blur-[120px] -z-10 animate-pulse"></div>

      <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="reveal active">
          <h2 className="text-accent-primary font-medium mb-4">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Anjika Singh</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-lg">
            A Software Developer passionate about building high-performance web applications
            and crafting seamless digital experiences with modern technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn btn-primary flex items-center gap-2">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/anjikasingh15" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anjika-singh" className="text-text-secondary hover:text-accent-primary">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="reveal active hidden md:block relative">
          <div className="relative">
            <div className="glass p-4 rotate-3 hover:rotate-0 transition-all duration-500">
              <img
                src={heroGraphic}
                alt="Abstract Graphic"
                className="rounded-lg shadow-2xl"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 glass p-6 -z-10 w-32 h-32 rounded-full border-accent-secondary/30 border-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
