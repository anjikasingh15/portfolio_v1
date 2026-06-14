import React from 'react';
import { Monitor, Server, Globe, Code2, Rocket, Sparkles } from 'lucide-react';


const About = () => {
  const expertises = [
    {
      title: 'Website Development',
      icon: <Monitor className="text-accent-primary" size={28} />,
      desc: 'Building high-performance, responsive web applications.'
    },
    {
      title: 'Backend Engineering',
      icon: <Server className="text-accent-secondary" size={28} />,
      desc: 'Developing robust server-side logic and scalable APIs.'
    },
    {
      title: 'Website Hosting',
      icon: <Globe className="text-white" size={28} />,
      desc: 'Deploying and managing scalable cloud infrastructures.'
    }
  ];

  const stats = [
    { label: 'Completed Projects', value: '12+', color: 'text-accent-primary' },
    { label: 'Client Satisfaction', value: '99%', color: 'text-accent-secondary' },
    { label: 'Experience Years', value: '1+', color: 'text-white' }
  ];

  return (
    <section id="about" className="relative py-24 reveal overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Column: Expertise */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {expertises.map((item, index) => (
              <div
                key={index}
                className="glass p-6 flex items-center gap-8 group hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>

          {/* Right Column: About Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
              About <span className="text-gradient">me</span>
            </h2>

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mb-6">
              <p>
                I am a results-driven <span className="text-white font-bold">Software Engineer</span> with <span className="text-accent-primary font-bold">over 1 year of professional experience</span> designing, building, and maintaining high-performance server-side architectures. My core focus lies in crafting secure, scalable API infrastructures and optimizing database systems to meet enterprise requirements.
              </p>
              <p>
                Leveraging a strong technical foundation in <span className="text-white font-bold">Laravel, Node.js, and Express</span>, I specialize in engineering reliable backends that drive seamless application experiences. I am passionate about tackling complex backend challenges and delivering clean, maintainable, production-ready code.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-row justify-between pt-10 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <span className={`text-3xl md:text-4xl font-black ${stat.color}`}>
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-text-secondary font-bold">
                    {stat.label.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br /></React.Fragment>)}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


export default About;
