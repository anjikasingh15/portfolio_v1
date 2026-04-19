import React from 'react';
import { User, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="reveal">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="glass p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <User className="text-accent-primary" /> My Journey
            </h3>
            <p className="text-text-secondary mb-6">
              I am a dedicated Software Developer with 1 year of professional experience in 
              building scalable web applications. My journey began with a deep curiosity 
              for how things work on the internet, which led me to master the modern web stack.
            </p>
            <p className="text-text-secondary">
              Over the past year, I've had the opportunity to work on diverse projects, 
              from internal tools to customer-facing platforms, always prioritizing 
              clean code and user-centric design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="glass p-6 hover:border-accent-primary transition-all">
              <Target className="text-accent-primary mb-4" />
              <h4 className="font-bold mb-2">My Mission</h4>
              <p className="text-sm text-text-secondary">To build software that solves real-world problems effectively.</p>
            </div>
            <div className="glass p-6 hover:border-accent-secondary transition-all">
              <Zap className="text-accent-secondary mb-4" />
              <h4 className="font-bold mb-2">My Focus</h4>
              <p className="text-sm text-text-secondary">Clean architecture, performance, and accessibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
