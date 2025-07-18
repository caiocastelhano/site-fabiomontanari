import styles from './TeachingSection.module.css';
import Link from 'next/link';
import { dictionary } from '../../lib/dictionary';

export default function TeachingSection({ language = 'en' }) {
  const { title, paragraph, button } =
    dictionary.teaching[language] || dictionary.teaching.en;

  return (
    <section
      id="industry-engagement"
      className={styles.teachingSection}
      aria-label={
        language === 'pt'
          ? 'Seção de pesquisa e parcerias com a indústria'
          : 'Industry engagement and research section'
      }
    >
      <div className={`${styles.overlay} ${styles.hoverEffect}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <Link href="/industry-engagement" className={styles.button}>
          {button}
        </Link>
      </div>
    </section>
  );
}
