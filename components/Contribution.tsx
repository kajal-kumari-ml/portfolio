
import React from 'react';
import { CONTRIBUTION_POINTS } from '../data';

const Contribution: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass p-12 rounded-3xl border border-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center sm:text-left">
            How I Will Contribute to Your Company
          </h2>
          <p className="text-slate-400 text-lg mb-10 text-center sm:text-left">
            If I join your organization, I will leverage my expertise to drive impact across the backend lifecycle:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTRIBUTION_POINTS.map((point, index) => (
              <div key={index} className="flex items-start p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-slate-200 font-medium pt-2">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-600/10 rounded-2xl border border-blue-600/20 text-center">
            <p className="text-blue-300 font-semibold text-lg italic">
              "My goal is to deliver backend solutions that are not only technically sound but also aligned with product and business objectives."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribution;
