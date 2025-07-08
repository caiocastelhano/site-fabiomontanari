"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import consultingDictionary from "./consultingDictionary";
import styles from "./page.module.css"; // crie esse CSS depois
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
// import Blurb from "@/app/components/Blurb"; ← vamos criar depois

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
            <div key={index} className={styles.blurb}>
              <p className={styles.blurbText}>{blurb.text}</p>
              <p className={styles.blurbAuthor}>— {blurb.author}</p>
            </div>
            // Substituir por <Blurb /> depois, se quiser separar em componente
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
