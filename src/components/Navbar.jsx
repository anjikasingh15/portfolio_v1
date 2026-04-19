import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-xl font-bold">
          <Code2 className="text-accent-primary" />
          <span className="text-gradient">Anjika Singh</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm font-medium hover:text-accent-primary transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-4 mt-2 slide-in">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
