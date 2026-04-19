import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import project1 from '../assets/project-1.png';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Analytics Dashboard',
      description: 'A comprehensive dashboard for tracking sales, inventory, and customer behavior with real-time data visualization.',
      image: project1,
      tech: ['React', 'Node.js', 'Chart.js', 'Tailwind'],
      link: '#',
      github: '#',
    },
    {
      title: 'SaaS Landing Page',
      description: 'A high-converting landing page for a SaaS startup, featuring glassmorphism and smooth scroll animations.',
      image: project1, // Using same placeholder for now
      tech: ['Next.js', 'Framer Motion', 'TypeScript'],
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with drag-and-drop functionality and team workspace features.',
      image: project1,
      tech: ['React', 'Firebase', 'Redux'],
      link: '#',
      github: '#',
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
                  <a href={project.github} className="p-2 glass rounded-full hover:text-accent-primary">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="p-2 glass rounded-full hover:text-accent-primary">
                    <ExternalLink size={20} />
                  </a>
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
