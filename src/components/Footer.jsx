import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} Anjika Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
