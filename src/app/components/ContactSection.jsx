'use client';

import React from 'react';
import styles from './ContactSection.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Contact',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida.',
      emails: [
        { label: 'Direct', email: 'fabiomontanari@email.com' },
        { label: 'Agent', email: 'agente@email.com' },
      ],
    },
    pt: {
      title: 'Contato',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium purus sit amet risus pharetra, quis condimentum velit gravida.',
      emails: [
        { label: 'Direto', email: 'fabiomontanari@email.com' },
        { label: 'Agente', email: 'agente@email.com' },
      ],
    },
  };

  const { title, paragraph, emails } = content[language] || content.en;

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
