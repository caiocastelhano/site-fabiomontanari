'use client';

import React from 'react';
import styles from './ConsultingSection.module.css';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function ConsultingSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Development & Consulting',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida.',
      button: 'Discover More',
    },
    pt: {
      title: 'Desenvolvimento & Consultoria',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida.',
      button: 'Saiba Mais',
    },
  };

  const { title, paragraph, button } = content[language] || content.en;

  return (
    <section id="consulting" className={styles.consultingSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <Link href="/development-consulting" className={styles.button}>
          {button}
        </Link>
      </div>
    </section>
  );
}
