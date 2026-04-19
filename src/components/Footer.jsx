import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} Anjika Singh. All rights reserved.
        </p>
        <p className="flex items-center gap-2 text-text-secondary text-sm">
          Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Vanilla CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
