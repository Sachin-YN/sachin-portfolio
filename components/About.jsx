import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        duration: 0.8
      });
    }
  }, []);
  return (
    <section ref={sectionRef} id="about" className="py-20 bg-secondary-bg text-white text-center">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="max-w-xl mx-auto text-gray-300">
        I’m Sachin Yoganandham—Data Analyst & Front-End Engineer.
        I craft sleek, high-performance web apps that turn raw data into interactive experiences.
      </p>
    </section>
);
}
