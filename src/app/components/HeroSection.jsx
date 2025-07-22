import styles from './HeroSection.module.css';
import Image from 'next/image';

export default function HeroSection({ language = 'en' }) {
  const images = [1, 2, 3, 4];

  return (
    <section className={styles.heroSection}>
      <div className={styles.imageGrid}>
        {images.map((num) => (
          <div key={num} className={styles.gridItem}>
            <Image
              src={`/images/hero/image${num}.webp`}
              alt={
                language === 'pt'
                  ? `Imagem ${num} do mosaico da seção inicial`
                  : `Image ${num} from the HeroSection mosaic`
              }
              fill
              className={styles.gridImage}
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        ))}
        <div className={styles.mask} aria-hidden="true" />
      </div>
    </section>
  );
}
