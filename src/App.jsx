import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
