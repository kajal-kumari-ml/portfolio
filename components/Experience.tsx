
import React from 'react';
import { EXPERIENCES } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Career Journey</h2>
          <div className="w-20 h-1.5 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 border-l-2 border-slate-800 last:border-l-transparent">
              {/* Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950"></div>
              
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              
              <div className="mb-4 text-slate-400 font-medium">
                <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  {exp.company}
                </a> • {exp.location}
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((item, aIndex) => (
                  <li key={aIndex} className="text-slate-400 text-sm sm:text-base flex items-start">
                    <span className="text-blue-500 mr-3 mt-1.5 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
