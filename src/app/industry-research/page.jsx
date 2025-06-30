"use client";

import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import industryDictionary from './industryDictionary';

export default function IndustryResearchPage() {
  const { language } = useLanguage();
  const t = industryDictionary[language];

  const images = [
    { filename: "foto1.png", key: "foto1" },
    { filename: "foto2.png", key: "foto2" },
    { filename: "foto3.png", key: "foto3" },
    { filename: "foto4.png", key: "foto4" },
    { filename: "foto5.png", key: "foto5" },
    { filename: "foto6.png", key: "foto6" },
    { filename: "foto7.jpeg", key: "foto7" },
    { filename: "foto8.png", key: "foto8" },
    { filename: "foto9.png", key: "foto9" },
    { filename: "foto10.png", key: "foto10" },
    { filename: "foto11.jpg", key: "foto11" },
    { filename: "foto12.png", key: "foto12" },
    { filename: "foto13.png", key: "foto13" },
    { filename: "foto14.jpg", key: "foto14" },
    { filename: "foto15.png", key: "foto15" }
  ];

  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Industry Engagement & Research</h1>
          <p className={styles.intro}>{t.intro}</p>

          {images.map(({ filename, key }) => (
            <figure key={key} className={styles.figure}>
              <img
                src={`/images/industry-research/${filename}`}
                alt={t.captions[key]}
                className={styles.image}
              />
              <figcaption className={styles.caption}>{t.captions[key]}</figcaption>
            </figure>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
