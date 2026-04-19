import About from '@/components/About';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Internships from '@/components/Internships';
import MetabaseDashboards from '@/components/MetabaseDashboards';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <Hero />
        <About />
        <Skills />
        <MetabaseDashboards />
        <Internships />
        <Projects />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
