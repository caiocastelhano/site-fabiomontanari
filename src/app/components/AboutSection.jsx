import styles from './AboutSection.module.css';
import Link from 'next/link';
import { dictionary } from '../../lib/dictionary';

export default function AboutSection({ language = 'en' }) {
  const { title, paragraph, button } =
    dictionary.about[language] || dictionary.about.en;

  return (
    <section
      id="about-me"
      className={styles.aboutSection}
      aria-label={
        language === 'pt'
          ? 'Seção sobre Fabio Montanari'
          : 'About Fabio Montanari section'
      }
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <Link href="/about-me" className={styles.button}>
          {button}
        </Link>
      </div>
    </section>
  );
}
