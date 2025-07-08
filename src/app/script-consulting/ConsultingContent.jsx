"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import consultingDictionary from "./consultingDictionary";
import Blurb from "./Blurb";
import styles from "./page.module.css";

export default function ConsultingContent() {
  const { language } = useLanguage();
  const t = consultingDictionary[language];

  return (
    <>
      <h1 className={styles.visuallyHidden}>{t.pageTitle}</h1>
      <p className={styles.intro}>{t.intro}</p>
      <section className={styles.blurbsSection}>
        <Blurb blurbs={t.blurbs} />
      </section>
    </>
  );
}
