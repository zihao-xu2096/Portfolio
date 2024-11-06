import React from 'react';
import styles from './TimelineStyles.module.css';

function Timeline() {
  return (
    <section id="timeline" className={styles.container}>
      <h1 className="sectionTitle">My Timeline</h1>
      <div className={styles.timeline}>
        <div className={`${styles.event} ${styles.left}`}>
          <div className={styles.date}>Sept. 2024 - Present</div>
          <div className={styles.content}>
            <h3>
              Software Developer Intern at{' '}
              <a href="https://getqatalyst.com" className={styles.companyLink}>
                getQatalyst
              </a>
            </h3>
            <p>Collaborating with Professor Jorjani to develop a web platform that provides 
                insights into software engineering teams.
            </p>
          </div>
        </div>
        <div className={`${styles.event} ${styles.right}`}>
          <div className={styles.date}>Jan. 2024 - Aug. 2024</div>
          <div className={styles.content}>
            <h3>
              DevOps Engineer Intern at{' '}
              <a href="https://www.intactfc.com" className={styles.companyLink}>
                Intact Financial Corporation
              </a>
            </h3>
            <p>Worked on Jenkins infrastructure on the Commercial Lines products.</p>
          </div>
        </div>
        <div className={`${styles.event} ${styles.left}`}>
          <div className={styles.date}>May 2023 - Dec 2024</div>
          <div className={styles.content}>
            <h3>
              Software Developer Intern at{' '}
              <a href="https://www.intactfc.com" className={styles.companyLink}>
                Intact Financial Corporation
              </a>
            </h3>
            <p>Focused on automating daily operations and improving feature release vulnerability 
                for the Commercial Lines products.
            </p>
          </div>
        </div>
        <div className={`${styles.event} ${styles.right}`}>
          <div className={styles.date}>Nov 2022 - June 2023</div>
          <div className={styles.content}>
            <h3>
              Software Developer at{' '}
              <a href="https://www.kontech.ai/" className={styles.companyLink}>
                Kontech Insights
              </a>
            </h3>
            <p>Developed key features for a user testing SaaS platform</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;