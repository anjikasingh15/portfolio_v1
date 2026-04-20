import React from 'react';
import { 
  Server, 
  Globe, 
  Cloud, 
  Terminal,
  Code2
} from 'lucide-react';
import { Github, AWS, ReactLogo, Firebase, JS, TS, ViteLogo, Expo, Node, SQL } from './Icons';
import './tech-orbit.css';

const TechOrbit = () => {
  return (
    <div className="tech-orbit-container">
      {/* Grid Lines */}
      <div className="orbit-grid">
        <div className="grid-circle circle-1"></div>
        <div className="grid-circle circle-2"></div>
        <div className="grid-circle circle-3"></div>
        <div className="grid-line line-h"></div>
        <div className="grid-line line-v"></div>
        <div className="grid-line line-d1"></div>
        <div className="grid-line line-d2"></div>
      </div>

      {/* Central Tech */}
      <div className="tech-node center-node">
        <div className="tech-icon-wrapper">
          <Code2 size={35} className="text-accent-primary" />
        </div>
      </div>


      {/* Orbit 1 (Inner) */}
      <div className="orbit orbit-inner">
        <div className="tech-node node-1" style={{ '--angle': '0deg' }}>
          <div className="tech-icon-wrapper">
            <ReactLogo size={32} />
          </div>
        </div>
        <div className="tech-node node-2" style={{ '--angle': '90deg' }}>
          <div className="tech-icon-wrapper">
            <JS size={32} />
          </div>
        </div>
        <div className="tech-node node-3" style={{ '--angle': '180deg' }}>
          <div className="tech-icon-wrapper">
            <TS size={32} />
          </div>
        </div>
        <div className="tech-node node-12" style={{ '--angle': '270deg' }}>
          <div className="tech-icon-wrapper">
            <ViteLogo size={32} />
          </div>
        </div>
      </div>


      {/* Orbit 2 (Middle) */}
      <div className="orbit orbit-middle">
        <div className="tech-node node-4" style={{ '--angle': '0deg' }}>
          <div className="tech-icon-wrapper">
            <Firebase size={35} />
          </div>
        </div>
        <div className="tech-node node-5" style={{ '--angle': '120deg' }}>
          <div className="tech-icon-wrapper">
            <Expo size={32} />
          </div>
        </div>
        <div className="tech-node node-6" style={{ '--angle': '240deg' }}>
          <div className="tech-icon-wrapper">
            <AWS size={40} />
          </div>
        </div>
      </div>

      {/* Orbit 3 (Outer) */}
      <div className="orbit orbit-outer">
        <div className="tech-node node-7" style={{ '--angle': '30deg' }}>
          <div className="tech-icon-wrapper">
            <SQL size={24} />
          </div>
        </div>
        <div className="tech-node node-8" style={{ '--angle': '100deg' }}>
          <div className="tech-icon-wrapper">
            <Github size={28} />
          </div>
        </div>
        <div className="tech-node node-9" style={{ '--angle': '170deg' }}>
          <div className="tech-icon-wrapper">
            <Node size={24} />
          </div>
        </div>
        <div className="tech-node node-10" style={{ '--angle': '240deg' }}>
          <div className="tech-icon-wrapper">
            <Server size={24} color="#10b981" />
          </div>
        </div>
        <div className="tech-node node-11" style={{ '--angle': '310deg' }}>
          <div className="tech-icon-wrapper">
            <Cloud size={24} color="#f97316" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TechOrbit;
