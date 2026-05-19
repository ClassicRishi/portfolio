import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>About <span className="gradient-text">Me</span></h2>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.bentoGrid}>
          {/* Intro Card */}
          <div className={`${styles.bentoCard} ${styles.introCard}`}>
            <div className={styles.avatar}>R</div>
            <h2 className={styles.name}>Rishi</h2>
            <p className={styles.role}>Data Analyst & Software Engineer</p>
          </div>

          {/* Bio Card */}
          <div className={`${styles.bentoCard} ${styles.bioCard}`}>
            <h3 className={styles.cardTitle}>Background</h3>
            <p className={styles.text}>
              I am a passionate Data Analyst and Software Engineer with a knack for building data-driven solutions and interactive dashboards. I believe that raw data should not only be processed flawlessly but also visualized beautifully.
            </p>
            <p className={styles.text}>
              My focus is on creating modular, polished solutions—whether it’s authentication flows, complex data pipelines, or advanced UI components—that empower businesses and delight users.
            </p>
          </div>

          {/* Stack Card */}
          <div className={`${styles.bentoCard} ${styles.stackCard}`}>
            <h3 className={styles.cardTitle}>Tech Stack</h3>
            <div className={styles.tagsGrid}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>SQL</span>
              <span className={styles.tag}>Metabase</span>
              <span className={styles.tag}>Data Visualization</span>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>Streamlit</span>
              <span className={styles.tag}>Elasticsearch</span>
            </div>
          </div>

          {/* Status Card */}
          <div className={`${styles.bentoCard} ${styles.statusCard}`}>
            <div className={styles.pulseContainer}>
              <div className={styles.pulse}></div>
              <div className={styles.pulseCore}></div>
            </div>
            <p className={styles.statusText}>Open to new opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
