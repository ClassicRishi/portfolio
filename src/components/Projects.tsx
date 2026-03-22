import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Vehicle Assistance',
      description: 'A comprehensive platform for vehicular assistance. Features a full-stack architecture to seamlessly connect users with service providers.',
      tech: ['React.js', 'Express.js', 'MongoDB', 'HTML/CSS/JS'],
      link: 'https://vehicle-assistance-1.onrender.com/',
      github: 'https://github.com/ClassicRishi/vehicle-assistance'
    },
    {
      title: 'Zoo Application',
      description: 'A server-rendered web application built to manage and display zoo information using dynamic pug templates for fast content delivery.',
      tech: ['Express.js', 'Pug', 'Node.js'],
      link: 'https://zoo-crod.onrender.com/',
      github: 'https://github.com/ClassicRishi/zoo'
    },
    {
      title: 'Nassau Candy Distributor Analytics',
      description: 'A powerful business intelligence dashboard that visualizes analytics and key metrics using a Python-based web framework.',
      tech: ['Python', 'Streamlit', 'Data Analytics'],
      link: 'https://nasaucandydistributor-ceystnedit3zucxjdgxmpt.streamlit.app',
      github: 'https://github.com/ClassicRishi/nasau_candy_distributor'
    }
  ];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.cardInner}>
              <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>📁</div>
                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <span>GitHub</span>
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <span>Live</span>
                  </a>
                </div>
              </div>
              
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
