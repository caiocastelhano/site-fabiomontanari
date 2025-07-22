import styles from './HeroText.module.css';

export default function HeroText({ paragraph }) {
  return (
    <section className={styles.heroTextSection}>
      <p className={styles.paragraph}>{paragraph}</p>
    </section>
  );
}
