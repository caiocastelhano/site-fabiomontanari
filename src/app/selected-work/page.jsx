"use client";

import { useLanguage } from "../context/LanguageContext";
import workDictionary from "./workDictionary";
import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkSection from "./WorkSection";

export default function SelectedWorkPage() {
  const { language } = useLanguage();
  const t = workDictionary[language].projects;

  const projectKeys = Object.keys(t);

  return (
    <>
      <Header />

      <main
        className={styles.page}
        role="main"
        aria-labelledby="selectedWorkTitle"
      >
        <h1 id="selectedWorkTitle" className={styles.visuallyHidden}>
          Selected Work
        </h1>

        {projectKeys.map((key, index) => (
          <WorkSection key={key} projectKey={key} index={index} />
        ))}
      </main>

      <Footer />
    </>
  );
}
