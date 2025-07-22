import styles from './ContactSection.module.css';
import { dictionary } from '../../lib/dictionary';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';

export default function ContactSection({ language = 'en' }) {
  const { title, paragraph, emails } =
    dictionary.contact[language] || dictionary.contact.en;

  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section
      id="contact"
      className={styles.contactSection}
      aria-label={
        language === 'pt'
          ? 'Seção de contato com Fabio Montanari'
          : 'Contact section for Fabio Montanari'
      }
    >
      <div
        ref={ref}
        className={`${styles.overlay} ${styles.hoverEffect} ${styles.fadeWrapper} ${isVisible ? styles.visible : styles.hidden}`}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <div className={styles.emails}>
          {emails.map(({ label, email }) => (
            <p key={email} className={styles.emailLine}>
              <strong>{label}:</strong>{' '}
              <a href={`mailto:${email}`} className={styles.emailLink}>
                {email}
              </a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
