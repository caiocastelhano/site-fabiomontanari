import styles from './HeroSection.module.css';
import Image from 'next/image';
import { dictionary } from '../../lib/dictionary';

export default function HeroSection({ language = 'en' }) {
  const { title, paragraph, sections } =
    dictionary.hero[language] || dictionary.hero.en;

  const images = [1, 2, 3, 4];

  return (
    <section className={styles.heroSection}>
      <div className={styles.imageGrid}>
        {images.map((num) => (
          <div key={num} className={styles.gridItem}>
            <Image
              src={`/images/hero/image${num}.jpg`}
              alt={
                language === 'pt'
                  ? `Imagem ${num} do mosaico da seção inicial`
                  : `Image ${num} from the HeroSection mosaic`
              }
              fill
              className={styles.gridImage}
              style={{ objectFit: "cover" }}
              loading={num === 1 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className={styles.mask} aria-hidden="true" />
      </div>

      <div className={styles.overlay}>
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
