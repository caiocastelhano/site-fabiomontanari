import styles from './TeachingSection.module.css';
import Link from 'next/link';
import { dictionary } from '../../lib/dictionary';

export default function TeachingSection({ language = 'en' }) {
  const { title, paragraph, button } =
    dictionary.teaching[language] || dictionary.teaching.en;

  return (
    <section
      id="industry-research"
      className={styles.teachingSection}
      aria-label={
        language === 'pt'
          ? 'Seção de pesquisa e parcerias com a indústria'
          : 'Industry engagement and research section'
      }
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <Link href="/industry-research" className={styles.button}>
          {button}
        </Link>
      </div>
    </section>
  );
}
