"use client";

import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import aboutDictionary from './aboutDictionary';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiImdb } from 'react-icons/si';
import Image from 'next/image';

export default function AboutMePage() {
  const { language } = useLanguage();
  const t = aboutDictionary[language];

  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <Image
            src="/images/about-me/fabio-montanari.JPG"
            alt="Retrato de Fabio Montanari, roteirista e diretor"
            className={styles.profileImage}
            width={340}
            height={420}
          />

          <h1 className={styles.visuallyHidden}>{t.title}</h1>
          <p className={styles.intro}>{t.intro}</p>

          <section className={styles.section}>
            <h2>{t.multiculturalTitle}</h2>
            <p>{t.multiculturalText}</p>
          </section>

          <section className={styles.section}>
            <h2>{t.collaborationTitle}</h2>
            <p>{t.collaborationText}</p>
          </section>

          <section className={styles.section}>
            <h2>{t.characterTitle}</h2>
            <p>{t.characterText}</p>
          </section>

          <section className={styles.section}>
            <h2>{t.directingTitle}</h2>
            <p>{t.directingText}</p>
          </section>

          <section className={styles.section}>
            <h2>{t.innovationTitle}</h2>
            <p>{t.innovationText}</p>
          </section>

          <section className={styles.section}>
            <h2>{t.teachingTitle}</h2>
            {t.teachingText}
          </section>

          <section className={styles.section}>
            <h2>{t.childActorTitle}</h2>
            <p>{t.childActorText}</p>
          </section>

          <section className={styles.section}>
            <h2>{t.closingTitle}</h2>
            <p>{t.closingText}</p>
          </section>

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
      </main>

      <Footer />
    </>
  );
}
