import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TargetCursor from './components/react-bits/TargetCursor';
import { useTheme } from './context/ThemeContext';

function PortfolioContent() {
  const { theme } = useTheme();

  return (
    <div className="portfolio-app">
      {/* TargetCursor active only on fine-pointer desktop with reduced motion disabled */}
      <TargetCursor
        targetSelector=".cursor-target"
        cursorColor={theme === 'dark' ? '#ffffff' : '#000000'}
        cursorColorOnTarget={theme === 'dark' ? '#ffffff' : '#000000'}
        size={32}
        cornerSize={10}
        thickness={2}
        dotSize={4}
        spinDuration={2.4}
        showLabel={true}
        parallaxOn={true}
        blendMode="difference"
      />

      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return <PortfolioContent />;
}
