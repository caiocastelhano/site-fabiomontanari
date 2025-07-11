"use client";

import styles from './page.module.css';
import aboutDictionary from './aboutDictionary';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiImdb } from 'react-icons/si';
import Image from 'next/image';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutContent() {
  const { language } = useLanguage();
  const t = aboutDictionary[language];

  return (
    <div className={styles.container}>
      {/* COLUNA ESQUERDA */}
      <div className={styles.leftColumn}>
        <Image
          src="/images/about-me/fabio-montanari.JPG"
          alt="Fabio Montanari"
          className={styles.profileImage}
          width={340}
          height={420}
          priority
        />
        <p className={styles.initialText}>{t.intro}</p>

        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/fabio-montanari-1616a931/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin focusable="false" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/fabiomontanari/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram focusable="false" aria-hidden="true" />
          </a>
          <a
            href="https://www.imdb.com/pt/name/nm5888483/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="IMDb"
            title="IMDb"
          >
            <SiImdb focusable="false" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* COLUNA DIREITA */}
      <div className={styles.rightColumn}>
        <details className={styles.accordion}>
          <summary>{t.multiculturalTitle}</summary>
          <p>{t.multiculturalText}</p>
        </details>

        <details className={styles.accordion}>
          <summary>{t.collaborationTitle}</summary>
          <p>{t.collaborationText}</p>
        </details>

        <details className={styles.accordion}>
          <summary>{t.characterTitle}</summary>
          <p>{t.characterText}</p>
        </details>

        <details className={styles.accordion}>
          <summary>{t.directingTitle}</summary>
          <p>{t.directingText}</p>
        </details>

        <details className={styles.accordion}>
          <summary>{t.innovationTitle}</summary>
          <p>{t.innovationText}</p>
        </details>

        <details className={styles.accordion}>
          <summary>{t.teachingTitle}</summary>
          {t.teachingText}
        </details>

        <details className={styles.accordion}>
          <summary>{t.childActorTitle}</summary>
          <p>{t.childActorText}</p>
        </details>

        <section className={styles.closing}>
          <h2>{t.closingTitle}</h2>
          <p>
            {t.closingText.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </section>
      </div>
    </div>
  );
}
