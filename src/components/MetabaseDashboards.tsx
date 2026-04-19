import styles from './MetabaseDashboards.module.css';

export default function MetabaseDashboards() {
  const samplePdf = {
    title: '🐼 zoo-dashboard',
    description: 'A Dashboard for a Zoo Application built using Metabase, showcasing key metrics and insights related to zoo operations, animal care, and visitor engagement on real time user transactional data',
    url: 'https://drive.google.com/file/d/19l63VGj2gHEDZ69aid0tb7k3TuSnvvKJ/view?usp=sharing'
  };

  return (
    <section className={styles.metabaseSection} id="metabase-dashboards">
      <div className={styles.header}>
        <div className={styles.line}></div>
        <h2 className={styles.sectionTitle}>
          Metabase <span className="gradient-text">Dashboards</span>
        </h2>
      </div>

      <div className={styles.sampleCard}>
        <h3>{samplePdf.title}</h3>
        <p className={styles.sampleText}>{samplePdf.description}</p>
        <a
          href={samplePdf.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pdfLink}
        >
          {samplePdf.title}
        </a>
      </div>
    </section>
  );
}
