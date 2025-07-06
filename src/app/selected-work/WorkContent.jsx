"use client";

import { useLanguage } from "../context/LanguageContext";
import workDictionary from "./workDictionary";
import styles from "./page.module.css";
import WorkSection from "./WorkSection";
import React from "react";

export default function WorkContent() {
  const { language } = useLanguage();
  const t = workDictionary[language];

  const projectKeys = Object.keys(t.projects);

  return (
    <>
      <section className={styles.introSection}>
        <p className={styles.introText}>{t.introText}</p>
      </section>

      {projectKeys.map((key, index) => (
        <WorkSection
          key={key}
          projectKey={key}
          index={index}
          project={t.projects[key]}
        />
      ))}
    </>
  );
}
