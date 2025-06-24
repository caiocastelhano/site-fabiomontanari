'use client';

import React from 'react';
import styles from './TeachingSection.module.css';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function TeachingSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Teaching & Research',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida..',
      button: 'Learn More',
    },
    pt: {
      title: 'Ensino & Pesquisa',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida..',
      button: 'Saiba Mais',
    },
  };

  const { title, paragraph, button } = content[language] || content.en;

  return (
    <section id="teaching" className={styles.teachingSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <Link href="/teaching-research" className={styles.button}>
          {button}
        </Link>
      </div>
    </section>
  );
}
