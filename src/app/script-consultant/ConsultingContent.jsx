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
      <div className={styles.introContainer}>
        <h1 className={styles.pageTitle}>{t.pageTitle}</h1>
        <section className={styles.introSection} aria-labelledby="intro-heading">
          <h2 id="intro-heading" className={styles.visuallyHidden}>Introduction</h2>
          {t.intro.split("\n\n").map((paragraph, index) => (
            <p key={index} className={styles.intro}>
              {paragraph}
            </p>
          ))}
        </section>
      </div>

      <div className={styles.blurbsContainer}>
        <section className={styles.blurbsSection} aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className={styles.visuallyHidden}>Testimonials</h2>
          <Blurb blurbs={t.blurbs} />
        </section>
      </div>
    </main>
  );
}
