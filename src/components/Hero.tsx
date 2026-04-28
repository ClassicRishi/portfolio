import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.content} animate-fade-in`}>
        <p className={styles.greeting}>
          Hi, I am <span className={styles.greetingName}>K. Rishi Vardhan</span>
        </p>
        <h1 className={styles.title}>
          A Passionate <br />
          <span className="gradient-text">Data Analyst</span>
        </h1>
        <p className={styles.subtitle}>
          I build beautiful, responsive dashboards using Metabase.And i prefer Grafana for time based series datasets.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className="glass-btn-primary class-btn" style={{ padding: '14px 28px', borderRadius: '8px', fontWeight: 'bold' }}>
            View My Work
          </a>
          <a href="#contact" className="glass-btn" style={{ padding: '14px 28px' }}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
