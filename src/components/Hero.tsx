import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.content} animate-fade-in`}>
        <p className={styles.greeting}>Hi, I am</p>
        <h1 className={styles.title}>
          A Passionate <br />
          <span className="gradient-text">Software Engineer</span>
        </h1>
        <p className={styles.subtitle}>
          I build beautiful, responsive, and high-performance web applications using modern technologies.
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
      <div className={`${styles.imageWrapper} animate-fade-in delay-200`}>
        <div className={styles.glowCircle}></div>
        <div className={styles.heroImage}>
          {/* Using a structural placeholder for image given we want a stunning UI, a glass card shape is cool */}
          <div className={styles.imageCard}>
            <div className={styles.cardHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <div className={styles.cardLines}>
              <div className={styles.line}></div>
              <div className={styles.line} style={{ width: '70%' }}></div>
              <div className={styles.line} style={{ width: '50%' }}></div>
              <div className={styles.codeBlock}>
                <code>{`const developer = {\n  name: 'K. Rishi Vardhan',\n  skills: ['Python', 'SQL', 'Streamlit'],\n  passion: 'Building real-time dashboards!'\n};`}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
