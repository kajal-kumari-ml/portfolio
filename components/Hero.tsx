
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-900">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Text Content - Focused on the provided bio */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-bold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Available for New Opportunities
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 text-white leading-[1.1]">
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-purple-500">
                Scalable Backends
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-12 mx-auto lg:mx-0 font-light">
              Senior Java Backend Developer with hands-on experience delivering multiple production-grade projects end-to-end. Expert in <span className="text-blue-400 font-semibold">Java, Spring Boot, MySQL, and MongoDB</span>, with a strong track record of optimizing backend performance and driving measurable system efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/30 text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Browse Projects
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="px-10 py-4 glass text-white font-bold rounded-2xl transition-all hover:bg-white/10 text-center border border-white/10"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Profile Image - Utilizing the provided photo */}
          <div className="flex-1 relative order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
              {/* Complex decorative elements around the image */}
              <div className="absolute inset-0 rounded-[3rem] rotate-6 border-2 border-dashed border-blue-500/20"></div>
              <div className="absolute inset-4 rounded-[3rem] -rotate-3 border border-purple-500/10"></div>

              {/* Professional Photo Container */}
              <div className="absolute inset-6 rounded-[2.5rem] overflow-hidden border-4 border-slate-800 shadow-2xl group">
                <img
                  src="https://i.ibb.co/BpJ2Cw9/Whats-App-Image-2025-12-25-at-7-03-16-PM.jpg"
                  className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700"
                  alt="Kajal Kumari Portrait"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://i.ibb.co/BpJ2Cw9/Whats-App-Image-2025-12-25-at-7-03-16-PM.jpg";
                  }}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Experience Badge Floating */}
              <div className="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-700 p-6 rounded-3xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform cursor-default">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-white text-2xl">
                  4+
                </div>
                <div>
                  <div className="text-white font-bold">Years Experience</div>
                  <div className="text-slate-400 text-sm">Java Backend</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
