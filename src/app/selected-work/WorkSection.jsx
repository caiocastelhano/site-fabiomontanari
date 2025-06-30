import styles from './WorkSection.module.css';
import ImageCarousel from './ImageCarousel';
import workDictionary from './workDictionary';
import { useLanguage } from '../../context/LanguageContext';

export default function WorkSection({ projectKey, index }) {
  const { language } = useLanguage();
  const content = workDictionary[language][projectKey];

  const isEven = index % 2 === 0;

  return (
    <section className={`${styles.section} ${isEven ? styles.even : styles.odd}`}>
      <div className={styles.text}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.role}>{content.role}</p>
        {content.description.map((paragraph, idx) => (
          <p key={idx} className={styles.paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.carousel}>
        <ImageCarousel folderName={projectKey} />
      </div>
    </section>
  );
}
