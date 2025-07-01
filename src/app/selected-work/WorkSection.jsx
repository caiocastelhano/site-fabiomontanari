import styles from './WorkSection.module.css';
import ImageCarousel from './ImageCarousel';
import workDictionary from './workDictionary';
import { useLanguage } from '../context/LanguageContext';

export default function WorkSection({ projectKey, index }) {
  const { language } = useLanguage();
  const project = workDictionary[language].projects[projectKey];
  const isEven = index % 2 === 0;

  return (
    <section
      className={`${styles.section} ${isEven ? styles.lightBackground : styles.darkBackground}`}
      aria-labelledby={`project-title-${projectKey}`}
    >
      <div className={`${styles.projectContent} ${isEven ? styles.textRight : styles.textLeft}`}>
        <div className={styles.textBlock}>
          <h2
            className={styles.projectTitle}
            id={`project-title-${projectKey}`}
          >
            {project.title}
          </h2>

          <p className={styles.role}>{project.role}</p>

          {project.description.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className={styles.description}>
              {paragraph}
            </p>
          ))}

          {project.platformLogo && (
            <img
              src={project.platformLogo}
              alt={`${project.title} platform logo`}
              className={styles.platformLogo}
              loading="lazy"
              width={150}
              height={50}
            />
          )}
        </div>

        <div className={styles.imageBlock}>
          <ImageCarousel folderName={project.folder || projectKey} />
        </div>
      </div>
    </section>
  );
}
