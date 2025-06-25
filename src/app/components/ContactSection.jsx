import styles from './ContactSection.module.css';
import { dictionary } from '../../lib/dictionary';

export default function ContactSection({ language = 'en' }) {
  const { title, paragraph, emails } =
    dictionary.contact[language] || dictionary.contact.en;

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <div className={styles.emails}>
          {emails.map(({ label, email }, index) => (
            <p key={index} className={styles.emailLine}>
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
