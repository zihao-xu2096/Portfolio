import './App.css';
import Contact from './sections/Contact/Contact';
import Timeline from './sections/Experience/Timeline';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';


function App() {
  return (
    <>
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;