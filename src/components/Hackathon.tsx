import styles from './Hackathon.module.css';

const hackathons = [
  {
    event: 'Potenza 2k24',
    college: 'Siddhartha Educational Academy',
    department: 'Computer Science and Engineering',
    project: 'Smart Road Side Vehicle Assistance',
    link: 'https://drive.google.com/file/d/1vfHNAsipkvyKvKnCWh8pfdEZLSMZQGx2/view?usp=sharing',
  },
  {
    event: 'Hack Fuzz 2k26',
    college: 'Sree Venkateswara College of Engineering',
    department: 'CSE(Data Science)',
    project: 'Smart Women One Tap SOS',
    link: 'https://drive.google.com/file/d/1xabkxjadf2WzhqVWAHNOn0uMl7Odn5Cn/view?usp=drive_link',
  },
];

export default function Hackathon() {
  return (
    <section className={styles.hackathon} id="hackathons">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>
          Hackathon <span className="gradient-text">Showcase</span>
        </h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {hackathons.map((hackathon, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.eventTag}>{hackathon.event}</div>
            <div className={styles.cardBody}>
              <h3 className={styles.college}>🏫 {hackathon.college}</h3>
              <p className={styles.department}>🎓 {hackathon.department}</p>
              <p className={styles.project}>💻 {hackathon.project}</p>
              <div className={styles.actions}>
                <a
                  href={hackathon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-btn ${styles.openButton}`}
                >
                  <span className={styles.buttonIcon}>🗁</span>
                  Open
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
