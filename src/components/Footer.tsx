import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoInfo}>
          <h2 className={`gradient-text ${styles.logoText}`}>Portfolio</h2>
          <p className={styles.tagline}>Crafting beautiful web experiences with Next.js and React.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h3>Navigation</h3>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
          <div className={styles.linkGroup}>
            <h3>Social</h3>
            <a href="https://github.com/ClassicRishi" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rishi-vardhan-8919723a2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
