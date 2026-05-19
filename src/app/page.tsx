import About from '@/components/About';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hackathon from '@/components/Hackathon';
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
        <About />
        <Skills />
        <MetabaseDashboards />
        <Internships />
        <Hackathon />
        <Projects />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
