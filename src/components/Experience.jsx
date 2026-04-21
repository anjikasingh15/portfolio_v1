import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Jamtech Technologies Pvt Ltd',
    position: 'Associate Software Engineer',
    period: 'May, 2025 - Present',
    side: 'right',
    points: [
      'Developing and maintaining responsive web applications using React, Laravel and Node.js.',
      'Optimized frontend performance by 30% through code splitting and lazy loading.',
    ],
  },
  {
    company: 'NIT Hamirpur',
    position: 'Data Science Intern',
    period: 'July, 2024 - September, 2024',
    side: 'left',
    points: [
      'Implemented and evaluated machine learning algorithms like Logistic Regression and Decision Tree.',
      'Built a predictive model for heart disease detection, achieving an accuracy of 85%.',
    ],
  },
];

/* ── Reusable Card ─────────────────────────────────────────── */
const ExperienceCard = ({ exp }) => (
  <div
    style={{
      padding: '1.5rem 1.75rem',
      background: 'var(--surface)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRadius: '1rem',
      border: '1px solid rgba(255,255,255,0.07)',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
      e.currentTarget.style.boxShadow = '0 8px 32px rgba(6,182,212,0.1)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {/* Company */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-primary)', marginBottom: '0.45rem' }}>
      <Briefcase size={15} />
      <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{exp.company}</span>
    </div>

    {/* Position */}
    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.35rem' }}>
      {exp.position}
    </h3>

    {/* Period */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1rem' }}>
      <Calendar size={13} />
      <span>{exp.period}</span>
    </div>

    {/* Bullet points — always left-aligned */}
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
      {exp.points.map((pt, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.65 }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            backgroundColor: 'var(--accent-primary)',
            marginTop: '0.52rem', flexShrink: 0,
          }} />
          <span>{pt}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ── Timeline Node ─────────────────────────────────────────── */
const Node = () => (
  <div style={{
    width: '16px', height: '16px', borderRadius: '50%',
    backgroundColor: 'var(--accent-primary)',
    border: '3px solid var(--bg-color)',
    boxShadow: '0 0 0 2px var(--accent-primary), 0 0 20px rgba(6,182,212,0.65)',
    flexShrink: 0,
  }} />
);

/* ── Main Component ────────────────────────────────────────── */
const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="experience" className="reveal">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div style={{
            width: '5rem', height: '3px',
            background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
            margin: '0 auto', borderRadius: '9999px',
          }} />
        </div>

        {/* ── Mobile Layout: plain stacked cards ── */}
        {isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '520px', margin: '0 auto' }}>
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        )}

        {/* ── Desktop Layout: 3-column grid timeline ── */}
        {!isMobile && (
          <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto' }}>

            {/* Vertical glowing line — sits at center of the 80px middle column */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0, bottom: 0,
              width: '2px',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(to bottom, transparent 0%, var(--accent-primary) 8%, var(--accent-primary) 92%, transparent 100%)',
              boxShadow: '0 0 10px rgba(6,182,212,0.45)',
              zIndex: 0,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.75rem' }}>
              {experiences.map((exp, index) => {
                const goRight = index % 2 === 0; // even → card on right
                return (
                  <div
                    key={index}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 80px 1fr',
                      alignItems: 'center',
                    }}
                  >
                    {/* ── Left cell ── */}
                    <div style={{ paddingRight: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                      {!goRight && <ExperienceCard exp={exp} />}
                    </div>

                    {/* ── Center cell: node + connectors ── */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2, position: 'relative' }}>
                      {/* Connector → right card */}
                      {goRight && (
                        <div style={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 'calc(40px + 2rem)',
                          height: '1px',
                          background: 'linear-gradient(to right, var(--accent-primary), rgba(6,182,212,0.05))',
                          zIndex: 1,
                        }} />
                      )}
                      {/* Connector ← left card */}
                      {!goRight && (
                        <div style={{
                          position: 'absolute',
                          right: '50%',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 'calc(40px + 2rem)',
                          height: '1px',
                          background: 'linear-gradient(to left, var(--accent-primary), rgba(6,182,212,0.05))',
                          zIndex: 1,
                        }} />
                      )}
                      <Node />
                    </div>

                    {/* ── Right cell ── */}
                    <div style={{ paddingLeft: '2rem' }}>
                      {goRight && <ExperienceCard exp={exp} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;
