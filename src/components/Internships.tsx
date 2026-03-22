import styles from './Internships.module.css';

export default function Internships() {
  const internships = [
    {
      role: 'Full Stack Developer Intern',
      duration: '1 Month',
      project: 'Roadside Vehicle Assistance',
      certificateLink: 'https://drive.google.com/file/d/1_P9bGHrnkEEv0BgFipieqGZvsx_9Xl9Z/view'
    }
  ];

  return (
    <section className={styles.internships} id="internships">
      <div className={styles.header}>
        <div className={styles.line}></div>
        <h2 className={styles.sectionTitle}>
          My <span className="gradient-text">Internships</span>
        </h2>
      </div>

      <div className={styles.list}>
        {internships.map((intern, index) => (
          <div key={index} className={styles.internCard}>
            <div className={styles.timelinePoint}></div>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <h3 className={styles.role}>{intern.role}</h3>
                <span className={styles.duration}>{intern.duration}</span>
              </div>
              <p className={styles.project}>
                <span className={styles.label}>Project:</span> {intern.project}
              </p>
              <a
                href={intern.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn"
                style={{ marginTop: '1.5rem', display: 'inline-block', fontSize: '0.9rem' }}
              >
                View Certificate
              </a>
            </div>
            <div className={styles.glowEffect}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
