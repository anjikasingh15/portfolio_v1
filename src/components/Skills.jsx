import React, { useState } from 'react';
import { Layout, Server, Database, Settings, Star, Zap, BarChart2 } from 'lucide-react';

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend',
    label: 'Primary Focus',
    icon: <Server size={22} />,
    accent: '#06b6d4',         // cyan
    accentRgb: '6,182,212',
    skills: ['Laravel', 'Node.js', 'Express.js', 'REST APIs', 'PHP', 'Middleware'],
    featured: true,
  },
  {
    id: 'database',
    title: 'Database',
    label: 'Core Competency',
    icon: <Database size={22} />,
    accent: '#8b5cf6',         // violet
    accentRgb: '139,92,246',
    skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Query Optimization', 'ORMs'],
    featured: false,
  },
  {
    id: 'frontend',
    title: 'Frontend',
    label: 'Full-Stack Contributor',
    icon: <Layout size={22} />,
    accent: '#6366f1',         // indigo
    accentRgb: '99,102,241',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    featured: false,
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    label: 'Ecosystem',
    icon: <Settings size={22} />,
    accent: '#22d3ee',         // light cyan
    accentRgb: '34,211,238',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'AWS', 'VS Code'],
    featured: false,
  },
];

const stats = [
  { icon: <Zap size={16} />, value: '18+', label: 'Technologies' },
  { icon: <BarChart2 size={16} />, value: '4', label: 'Domains' },
  { icon: <Star size={16} />, value: '1+', label: 'Years Experience' },
];

const SkillChip = ({ skill, accent, accentRgb }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        padding: '0.3rem 0.85rem',
        borderRadius: '9999px',
        fontSize: '0.78rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
        cursor: 'default',
        transition: 'all 0.2s ease',
        background: hovered
          ? `rgba(${accentRgb}, 0.18)`
          : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? `rgba(${accentRgb}, 0.55)` : 'rgba(255,255,255,0.08)'}`,
        color: hovered ? accent : 'var(--text-secondary)',
        boxShadow: hovered ? `0 0 12px rgba(${accentRgb}, 0.25)` : 'none',
        transform: hovered ? 'translateY(-1px)' : 'none',
      }}
    >
      {skill}
    </span>
  );
};

const CategoryCard = ({ category }) => {
  const [hovered, setHovered] = useState(false);
  const { title, label, icon, accent, accentRgb, skills, featured } = category;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '1.25rem',
        border: `1px solid ${hovered ? `rgba(${accentRgb}, 0.45)` : 'rgba(255,255,255,0.07)'}`,
        padding: '1.75rem',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered
          ? `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(${accentRgb},0.15), inset 0 1px 0 rgba(255,255,255,0.05)`
          : '0 4px 20px rgba(0,0,0,0.2)',
        overflow: 'hidden',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '3px',
        background: `linear-gradient(90deg, ${accent}, transparent)`,
        opacity: hovered ? 1 : 0.5,
        transition: 'opacity 0.3s ease',
        borderRadius: '1.25rem 1.25rem 0 0',
      }} />

      {/* Featured glow */}
      {featured && (
        <div style={{
          position: 'absolute',
          top: '-40px', left: '-40px',
          width: '160px', height: '160px',
          background: `radial-gradient(circle, rgba(${accentRgb},0.12) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
      )}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Icon circle */}
          <div style={{
            width: '42px', height: '42px',
            borderRadius: '0.75rem',
            background: `rgba(${accentRgb}, 0.12)`,
            border: `1px solid rgba(${accentRgb}, 0.25)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: accent,
            flexShrink: 0,
          }}>
            {icon}
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.1rem', lineHeight: 1.2 }}>
              {title}
            </h3>
            <span style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: accent,
              opacity: 0.9,
            }}>
              {label}
            </span>
          </div>
        </div>

        {/* Skill count badge */}
        <span style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          color: accent,
          background: `rgba(${accentRgb}, 0.1)`,
          border: `1px solid rgba(${accentRgb}, 0.2)`,
          borderRadius: '9999px',
          padding: '0.2rem 0.6rem',
          whiteSpace: 'nowrap',
        }}>
          {skills.length} Skills
        </span>
      </div>

      {/* Skill chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {skills.map((skill, i) => (
          <SkillChip key={i} skill={skill} accent={accent} accentRgb={accentRgb} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="reveal">
      <div className="container">

        {/* Section header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
            Skills &amp; <span style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Expertise</span>
          </h2>
          <div className="h-1 bg-gradient-to-r mx-auto rounded-full" style={{ width: '150px', marginBottom: '1.25rem' }}></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '480px', lineHeight: 1.6, margin: '0 auto' }}>
            A comprehensive overview of my technical capabilities across backend systems, databases, and full-stack development.
          </p>
        </div>

        {/* Dashboard grid */}
        <div className="skills-grid" style={{ marginBottom: '2rem' }}>
          {skillCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="stats-container">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span style={{ color: 'var(--accent-primary)', opacity: 0.8 }}>{stat.icon}</span>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#f8fafc' }}>{stat.value}</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
