"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import consultingDictionary from "./consultingDictionary";
import Blurb from "./Blurb";
import ContactForm from "./ContactForm";
import styles from "./ConsultingContent.module.css";
import { useMultiFadeInOnScroll } from "../../hooks/useMultiFadeInOnScroll";

export default function ConsultingContent() {
  const { language } = useLanguage();
  const t = consultingDictionary[language];

  const paragraphs = t.intro.split("\n\n");

  const setFadeInRef = useMultiFadeInOnScroll(3);

  return (
    <main className={styles.page}>
      <div className={styles.introContainer}>
        <h1 className={styles.pageTitle}>{t.pageTitle}</h1>

        <section
          className={styles.introSection}
          aria-labelledby="intro-heading"
        >
          <h2 id="intro-heading" className={styles.visuallyHidden}>
            Introduction
          </h2>
          <p className={styles.intro}>{paragraphs[0]}</p>
        </section>
      </div>

      <div className={styles.blurbsContainer}>
        <section
          className={styles.blurbsSection}
          aria-labelledby="testimonials-heading"
        >
          <h2 id="testimonials-heading" className={styles.visuallyHidden}>
            Testimonials
          </h2>
          <Blurb blurbs={t.blurbs} />
        </section>

        {paragraphs.slice(1).map((paragraph, index) => (
          <p
            key={index}
            ref={setFadeInRef(index)}
            className={`${styles.paragraphAfterBlurbs} ${styles.fadeIn}`}
          >
            {paragraph}
          </p>
        ))}

        <div ref={setFadeInRef(2)} className={styles.fadeIn}>
          <ContactForm language={language} />
        </div>
      </div>
    </main>
  );
}
