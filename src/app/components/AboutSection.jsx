import styles from './AboutSection.module.css';
import Link from 'next/link';
import { dictionary } from '../../lib/dictionary';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';

export default function AboutSection({ language = 'en' }) {
  const { title, paragraph, button } =
    dictionary.about[language] || dictionary.about.en;

  const [ref, isVisible] = useFadeInOnScroll();

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
      <div
        ref={ref}
        className={`${styles.overlay} ${styles.hoverEffect} ${styles.fadeWrapper} ${isVisible ? styles.visible : styles.hidden}`}
      >
        {/* <h2 className={styles.title}>{title}</h2> */}
        {/* <p className={styles.paragraph}>{paragraph}</p>*/}
        <Link href="/about-me" className={styles.button}>
          {title}
        </Link>
      </div>
    </section>
  );
}
