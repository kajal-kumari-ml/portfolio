
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contribution from './components/Contribution';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-500/30 relative">
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contribution />
      </main>
      <Footer />
    </div>
  );
};

export default App;
