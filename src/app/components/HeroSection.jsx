'use client';

import React from 'react';
import styles from './HeroSection.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Fabio Montanari',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida.',
      sections: [
        { id: 'featured works', label: 'Featured Works' },
        { id: 'teaching', label: 'Teaching & Research' },
        { id: 'consulting', label: 'Development & Consulting' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
      ],
    },
    pt: {
      title: 'Fabio Montanari',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida.',
      sections: [
        { id: 'featured works', label: 'Trabalhos em destaque' },
        { id: 'teaching', label: 'Ensino & Pesquisa' },
        { id: 'consulting', label: 'Desenvolvimento & Consultoria' },
        { id: 'about', label: 'Sobre' },
        { id: 'contact', label: 'Contato' },
      ],
    },
  };

  const { title, paragraph, sections } = content[language] || content.en;

  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}>{paragraph}</p>
        <nav className={styles.sectionLinks}>
          {sections.map((section, index) => (
            <a key={index} href={`#${section.id}`} className={styles.link}>
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
