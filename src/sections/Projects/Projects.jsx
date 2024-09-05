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
          link="https://github.com/zihao-xu2096/cupet-frontend"
          h3="Cupet"
          p="Tinder, but for pets."
        />
        <ProjectCard
          src={github}
          link="https://github.com/zihao-xu2096/ChatScrappingBot"
          h3="Livesteam Lytics"
          p="Live chat scrapper."
        />
        <ProjectCard
          src={github}
          link="https://github.com/zihao-xu2096/VLR.gg-api"
          h3="VLR.gg API"
          p="API for Valorant stats."
        />
      </div>
    </section>
  );
}

export default Projects;
