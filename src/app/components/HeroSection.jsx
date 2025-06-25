import styles from './HeroSection.module.css';
import { dictionary } from '../../lib/dictionary';

export default function HeroSection({ language = 'en' }) {
  const { title, paragraph, sections } =
    dictionary.hero[language] || dictionary.hero.en;

  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}>{paragraph}</p>
        <nav className={styles.sectionLinks}>
          {sections.map((section, index) => (
            <a key={index} href={`#${section.id}`} className={styles.link}>
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
