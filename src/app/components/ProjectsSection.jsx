import styles from './ProjectsSection.module.css';
import Link from 'next/link';
import { dictionary } from '../../lib/dictionary';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';

export default function ProjectsSection({ language = 'en' }) {
  const { title, paragraph, button } =
    dictionary.projects[language] || dictionary.projects.en;

  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section
      className={styles.projectsSection}
      id="selected-work"
      aria-label={
        language === 'pt'
          ? 'Seção de trabalhos selecionados'
          : 'Selected work section'
      }
    >
      <div
        ref={ref}
        className={`${styles.overlay} ${styles.hoverEffect} ${styles.fadeWrapper} ${isVisible ? styles.visible : styles.hidden}`}
      >
        {/* <h2 className={styles.title}>{title}</h2> */}
        {/*<p className={styles.paragraph}>{paragraph}</p>*/}
        <Link href="/selected-work" className={styles.button}>
          {title}
        </Link>
      </div>
    </section>
  );
}
