import styles from './page.module.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Internships from '@/components/Internships';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <Hero />
        <About />
        <Skills />
        <Internships />
        <Projects />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
