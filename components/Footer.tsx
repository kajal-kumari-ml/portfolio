
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I'm always open to discussing new projects, backend architectures, or opportunities to contribute to high-impact teams.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <a href="mailto:kajalkumari73411@gmail.com" className="text-lg font-medium hover:text-blue-400 transition-colors">
                  kajalkumari73411@gmail.com
                </a>
              </div>
              <div className="flex items-center text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-lg font-medium">+91 7341151828</span>
              </div>
              <div className="flex items-center text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="text-lg font-medium">Chandigarh, India</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6">Profiles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://github.com/kajal-kumari-ml" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-900 rounded-xl hover:bg-blue-600 transition-all group">
                <span className="text-slate-300 font-medium group-hover:text-white">GitHub: kajal-kumari-ml</span>
              </a>
              <a href="https://www.linkedin.com/in/sahu-kajal/" className="flex items-center p-4 bg-slate-900 rounded-xl hover:bg-blue-600 transition-all group">
                <span className="text-slate-300 font-medium group-hover:text-white">LinkedIn: sahu-kajal</span>
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-700">
                <p className="text-white font-bold">Lovely Professional University</p>
                <p className="text-slate-400 text-sm">B.Tech | Computer Science (7.8 CGPA)</p>
                <p className="text-blue-500 text-xs mt-1">2018 - 2022</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-white mb-4">Awards</h3>
              <div className="p-4 bg-blue-600/10 rounded-xl border border-blue-600/20">
                <p className="text-blue-300 font-bold">Employee Of The Month</p>
                <p className="text-slate-300 text-sm">Awarded twice at RedBlink for dedication to projects.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Kajal Kumari. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
