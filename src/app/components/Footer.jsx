'use client';

import React from 'react';
import styles from './Footer.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  const footerText = {
    en: {
      line: (
        <>
          © 2025 Fabio Montanari. All rights reserved | Developed by{' '}
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
          © 2025 Fabio Montanari. Todos os direitos reservados | Desenvolvido por{' '}
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
