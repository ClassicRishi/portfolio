import styles from './Skills.module.css';

export default function Skills() {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'SQL for Business Intelligence', level: 90 },
    { name: 'Streamlit (Dashboard Dev)', level: 85 },
    { name: 'Elasticsearch & Kibana', level: 80 },
    { name: 'Data Visualization', level: 85 },
    { name: 'Docker', level: 80 }
  ];

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.header}>
        <div className={styles.line}></div>
        <h2 className={styles.sectionTitle}>
          My <span className="gradient-text">Skills</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillInfo}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className={styles.glowEffect}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
