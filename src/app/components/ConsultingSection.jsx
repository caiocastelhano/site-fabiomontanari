import styles from './ConsultingSection.module.css';
import Link from 'next/link';
import { dictionary } from '../../lib/dictionary';

export default function ConsultingSection({ language = 'en' }) {
  const { title, paragraph, button } =
    dictionary.consulting[language] || dictionary.consulting.en;

  return (
    <section id="script-consulting" className={styles.consultingSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <Link href="/script-consulting" className={styles.button}>
          {button}
        </Link>
      </div>
    </section>
  );
}
