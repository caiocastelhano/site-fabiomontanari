'use client';

import React from 'react';
import styles from './AboutSection.module.css';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function AboutSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida.',
      button: 'More About Me',
    },
    pt: {
      title: 'Sobre',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida.',
      button: 'Saiba Mais',
    },
  };

  const { title, paragraph, button } = content[language] || content.en;

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <Link href="/about" className={styles.button}>
          {button}
        </Link>
      </div>
    </section>
  );
}
