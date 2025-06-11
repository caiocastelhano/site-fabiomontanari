'use client';

import React from 'react';
import styles from './Footer.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const footerText = {
    en: {
      line: (
        <>
          © {currentYear} Fabio Montanari. All rights reserved | Developed by{' '}
          <a
            href="https://www.caiocastelhano.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Caio Castelhano
          </a>
          .
        </>
      ),
    },
    pt: {
      line: (
        <>
          © {currentYear} Fabio Montanari. Todos os direitos reservados | Desenvolvido por{' '}
          <a
            href="https://www.caiocastelhano.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Caio Castelhano
          </a>
          .
        </>
      ),
    },
  };

  return (
    <footer className={styles.footer}>
      <p>{footerText[language].line}</p>
    </footer>
  );
}
