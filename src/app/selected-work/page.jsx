"use client";

import { useLanguage } from "../context/LanguageContext";
import workDictionary from "./workDictionary";
import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkSection from "./WorkSection";

export default function SelectedWorkPage() {
  const { language } = useLanguage();
  const t = workDictionary[language];

  const projectKeys = Object.keys(t.projects);

  return (
    <>
      <Header />

      <main className={styles.page}>
        <h1 className={styles.visuallyHidden}>Selected Work</h1>

        <section className={styles.introSection}>
          <p className={styles.introText}>{t.introText}</p>
        </section>

        {projectKeys.map((key, index) => (
          <WorkSection key={key} projectKey={key} index={index} />
        ))}
      </main>

      <Footer />
    </>
  );
}
