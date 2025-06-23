import Hero from '../components/Hero';
import RevealSection from '../components/RevealSection';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <RevealSection><About /></RevealSection>
      <RevealSection delay={0.1}><TechStack /></RevealSection>
      <RevealSection delay={0.2}><Projects /></RevealSection>
      <RevealSection delay={0.3}><Contact /></RevealSection>
    </>
  );
}
