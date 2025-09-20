import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchAreas from './components/ResearchAreas';
import Projects from './components/Projects';
import Technology from './components/Technology';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ResearchAreas />
      <Projects />
      {/*<Technology />*/}
      {/*<Team />*/}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;