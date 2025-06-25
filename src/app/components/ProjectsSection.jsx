import styles from './ProjectsSection.module.css';
import Link from 'next/link';
import { dictionary } from '../../lib/dictionary';

export default function ProjectsSection({ language = 'en' }) {
  const { title, paragraph, button } =
    dictionary.projects[language] || dictionary.projects.en;

  return (
    <section id="featured works" className={styles.projectsSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <Link href="/works" className={styles.button}>
          {button}
        </Link>
      </div>
    </section>
  );
}
