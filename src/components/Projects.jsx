import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import projectMarketplace from '../assets/project-marketplace.png';
import projectAuction from '../assets/project-auction.png';
import projectHeart from '../assets/project-heart.png';

const Projects = () => {
  const projects = [
    {
      title: 'Marketplace Web App',
      description: 'An on-demand home services marketplace similar to Urban Company, connecting users with professional service providers for maintenance, cleaning, and repairs.',
      image: projectMarketplace,
      tech: ['React', 'Laravel', 'MySQL', 'Tailwind'],
      link: 'https://ezrainisrael.com',
      github: '#',
    },
    {
      title: 'Machine Auction Platform',
      description: 'A specialized auction system for industrial machines and recycling equipment, streamlining the bidding and transaction process.',
      image: projectAuction,
      tech: ['React', 'Laravel', 'MySQL', 'Node.js'],
      link: 'https://101recycle.com',
      github: '#',
    },
    {
      title: 'Heart Disease Prediction System',
      description: 'A data science project that utilizes machine learning algorithms like Logistic Regression and Decision Trees to predict cardiovascular diseases.',
      image: projectHeart,
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      link: '#',
      github: 'https://github.com/anjikasingh15/Cardiovascular-Disease-Prediction.git',
    },
  ];

  return (
    <section id="projects" className="reveal">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass overflow-hidden group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-bg-color/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:text-accent-primary">
                      <Github size={20} />
                    </a>
                  )}
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:text-accent-primary">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 glass rounded-md text-accent-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
