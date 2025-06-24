'use client';

import React from 'react';
import styles from './ProjectsSection.module.css';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function ProjectsSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Featured Works',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida.',
      button: 'See All Works',
    },
    pt: {
      title: 'Trabalhos em Destaque',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida.',
      button: 'Ver Todos os Trabalhos',
    },
  };

  const { title, paragraph, button } = content[language] || content.en;

  return (
    <section id="featured works" className={styles.projectsSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <Link href="/works" className={styles.button}>
          {button}
        </Link>
      </div>
    </section>
  );
}
