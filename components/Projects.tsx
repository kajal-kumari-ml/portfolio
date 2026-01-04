
import React from 'react';
import { PROJECTS } from '../data';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full">
            Technical Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Production-Grade Projects</h2>
          <p className="text-slate-400 text-xl leading-relaxed">
            A selection of backend services and systems I've designed, optimized, and maintained end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-[2.5rem] p-10 flex flex-col h-full hover:bg-white/[0.05] transition-all duration-500 border border-white/5 hover:border-blue-500/30 shadow-2xl"
            >
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-lg text-blue-400 text-sm font-medium border border-slate-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {project.period}
                </div>
              </div>

              <p className="text-slate-300 mb-10 text-lg leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="space-y-4 mb-10">
                {project.highlights.map((point, pIndex) => (
                  <div key={pIndex} className="flex items-start text-slate-400 text-sm sm:text-base">
                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    {point}
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full group/btn px-8 py-5 bg-slate-800 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl"
                >
                  <span className="flex items-center gap-3">
                    View Live Site
                    <svg className="w-5 h-5 text-blue-400 group-hover/btn:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </span>
                  <svg className="w-6 h-6 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
