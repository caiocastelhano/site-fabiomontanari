"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import consultingDictionary from "./consultingDictionary";
import Blurb from "./Blurb";
import styles from "./ConsultingContent.module.css";

export default function ConsultingContent() {
  const { language } = useLanguage();
  const t = consultingDictionary[language];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>{t.pageTitle}</h1>
        {t.intro.split('\n\n').map((paragraph, index) => (
          <p key={index} className={styles.intro}>
            {paragraph}
          </p>
        ))}
        <section className={styles.blurbsSection}>
          <Blurb blurbs={t.blurbs} />
        </section>
      </div>
    </main>
  );
}
