"use client";

import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import industryDictionary from './industryDictionary';

export default function IndustryResearchPage() {
  const { language } = useLanguage();
  const t = industryDictionary[language];

  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Industry Engagement & Research</h1>
          <p className={styles.intro}>{t.intro}</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
