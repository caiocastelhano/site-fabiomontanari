import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import styles from './WorkSection.module.css';
import ImageCarousel from './ImageCarousel';

export default function WorkSection({ project, projectKey, index }) {
  const isEven = index % 2 === 0;

  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section
      className={`
        ${styles.section}
        ${isEven ? styles.lightBackground : styles.darkBackground}
      `}
      aria-labelledby={`project-title-${projectKey}`}
    >
      <div className={`${styles.projectContent} ${isEven ? styles.textRight : styles.textLeft}`}>
        <div
          ref={ref}
          className={`${styles.textBlock} ${styles.fadeWrapper} ${isVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.projectTitle} id={`project-title-${projectKey}`}>
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
          <ImageCarousel
            folderName={project.folder || projectKey}
            totalImages={project.totalImages}
            alts={project.alts}
            videos={project.videos}
          />
        </div>
      </div>
    </section>
  );
}
