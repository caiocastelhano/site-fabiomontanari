import styles from './Footer.module.css';
import { dictionary } from '../../lib/dictionary';

export default function Footer({ language = 'en' }) {
  const content = dictionary.footer[language] || dictionary.footer.en;
  const currentYear = new Date().getFullYear();

  const line = content.line.replace('{year}', currentYear);

  return (
    <footer className={styles.footer}>
      <p>
        {line}{' '}
        <a
          href="https://www.caiocastelhano.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={content.aria}
        >
          Caio Castelhano
        </a>
        .
      </p>
    </footer>
  );
}
