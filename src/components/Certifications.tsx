import Image from 'next/image';
import styles from './Certifications.module.css';

export default function Certifications() {
  const certs = [
    {
      title: 'SQL for Business Intelligence',
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-d7b7d0de-ed52-4170-9024-63da5484e190.jpg'
    },
    {
      title: 'JavaScript Web Projects to Build Portfolio',
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-fe6e4a2c-431c-4a61-b31e-e382f086787d.jpg'
    },
    {
      title: 'jQuery UI in Action',
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-a89863e5-4429-42cd-9053-43739a6fbfd6.jpg'
    },
    {
      title: 'Modern PHP',
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-26ad3360-21af-4b8d-a2e4-6a5ad90a205a.jpg'
    }
  ];

  return (
    <section className={styles.certifications} id="certifications">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>
          My <span className="gradient-text">Certifications</span>
        </h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {certs.map((cert, index) => (
          <div key={index} className={styles.certCard}>
            <div className={styles.imageContainer}>
              <img 
                src={cert.image} 
                alt={cert.title} 
                className={styles.certImage} 
                loading="lazy"
              />
            </div>
            <div className={styles.cardInfo}>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <a href={cert.image} target="_blank" rel="noopener noreferrer" className={styles.viewLink}>
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
