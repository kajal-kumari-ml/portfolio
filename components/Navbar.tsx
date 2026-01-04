
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#about" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-2xl group-hover:rotate-6 transition-transform">K</div>
              <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                Kajal <span className="text-blue-500">Kumari</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <a href="#about" className="text-slate-400 hover:text-white px-4 py-2 text-sm font-semibold transition-colors">About</a>
              <a href="#skills" className="text-slate-400 hover:text-white px-4 py-2 text-sm font-semibold transition-colors">Skills</a>
              <a href="#experience" className="text-slate-400 hover:text-white px-4 py-2 text-sm font-semibold transition-colors">Experience</a>
              <a href="#projects" className="text-slate-400 hover:text-white px-4 py-2 text-sm font-semibold transition-colors">Projects</a>
              <div className="w-px h-6 bg-slate-800 mx-4"></div>
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-2"
              >
                Hire Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:hidden">
             <a 
               href="#contact" 
               className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-blue-600/20"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
