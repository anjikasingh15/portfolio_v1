import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="reveal">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-text-secondary mb-8">
              Feel free to reach out to me for any inquiries, collaborations, or just to say hi!
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-lg text-accent-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <p className="font-bold">anjikasingh03@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-lg text-accent-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Phone</p>
                  <p className="font-bold">+91 9918396738</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-lg text-accent-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Location</p>
                  <p className="font-bold">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          <form className="glass p-8 flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-bg-color/50 border border-border rounded-lg p-3 text-text-primary focus:outline-none focus:border-accent-primary transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-bg-color/50 border border-border rounded-lg p-3 text-text-primary focus:outline-none focus:border-accent-primary transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full bg-bg-color/50 border border-border rounded-lg p-3 text-text-primary focus:outline-none focus:border-accent-primary transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button className="btn btn-primary flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
