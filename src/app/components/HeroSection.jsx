import styles from './HeroSection.module.css';
import { dictionary } from '../../lib/dictionary';

export default function HeroSection({ language = 'en' }) {
  const { title, paragraph, sections } =
    dictionary.hero[language] || dictionary.hero.en;

  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}>
        {/* Título oculto para leitores de tela */}
        <h1 className={styles.visuallyHidden}>{title}</h1>

        <p className={styles.paragraph}>{paragraph}</p>

        <nav
          className={styles.sectionLinks}
          aria-label={
            language === 'pt'
              ? 'Links para as seções da página'
              : 'Links to page sections'
          }
        >
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className={styles.link}>
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
