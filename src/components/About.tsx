import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              Hello! I am a passionate Data Analyst and Software Engineer with a knack for building data-driven solutions and interactive dashboards. I believe that raw data should not only be processed flawlessly but also visualized beautifully.
            </p>
            <p className={styles.text}>
              My expertise spans Python, SQL for Business Intelligence, and building real-time dashboards using tools like Streamlit, Elasticsearch, and Kibana. I love solving complex data problems and extracting actionable insights.
            </p>
            <p className={styles.text}>
              Iam also passionate about web developement. I build web applications that balance scalable engineering with intuitive design. My focus is on creating modular, polished solutions—whether it’s authentication flows, dashboards, or advanced UI components—that empower businesses and delight users.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
