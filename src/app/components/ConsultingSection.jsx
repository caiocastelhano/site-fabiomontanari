import styles from './ConsultingSection.module.css';
import Link from 'next/link';
import { dictionary } from '../../lib/dictionary';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';

export default function ConsultingSection({ language = 'en' }) {
  const { title, paragraph, button } =
    dictionary.consulting[language] || dictionary.consulting.en;

  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section
      id="script-consultant"
      className={styles.consultingSection}
      aria-label={
        language === 'pt'
          ? 'Seção de consultoria de roteiro e desenvolvimento'
          : 'Script consulting and development section'
      }
    >
      <div
        ref={ref}
        className={`${styles.overlay} ${styles.hoverEffect} ${styles.fadeWrapper} ${isVisible ? styles.visible : styles.hidden}`}
      >
        {/* <h2 className={styles.title}>{title}</h2> */}
        {/*<p className={styles.paragraph}>{paragraph}</p>*/}
        <Link href="/script-consultant" className={styles.button}>
          {title}
        </Link>
      </div>
    </section>
  );
}
