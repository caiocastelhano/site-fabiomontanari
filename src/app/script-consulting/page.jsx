"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import consultingDictionary from "./consultingDictionary";
import styles from "./page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Blurb from "./Blurb";

export default function ScriptConsultingPage() {
  const { language } = useLanguage();
  const t = consultingDictionary[language];

  return (
    <>
      <Header />

      <main className={styles.page}>
        <h1 className={styles.visuallyHidden}>{t.pageTitle}</h1>

        <p className={styles.intro}>{t.intro}</p>

        <section className={styles.blurbsSection}>
          {t.blurbs.map((blurb, index) => (
            <Blurb key={index} text={blurb.text} author={blurb.author} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
