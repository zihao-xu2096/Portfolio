import styles from './ProjectsStyles.module.css';
import github from '../../assets/github.svg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={github}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Cupet"
          p="Tinder, but for pets."
        />
        <ProjectCard
          src={github}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Livesteam Lytics"
          p="Live chat scrapper."
        />
        <ProjectCard
          src={github}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="VLR.gg API"
          p="API for Valorant stats."
        />
      </div>
    </section>
  );
}

export default Projects;
