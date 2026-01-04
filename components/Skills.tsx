
import React from 'react';
import { SKILLS } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Core Competencies</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:border-blue-500/50 transition-all group">
              <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex} 
                    className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg text-sm border border-slate-700 group-hover:border-slate-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
