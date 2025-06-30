"use client";

import { useLanguage } from "../context/LanguageContext";
import selectedWorkDictionary from "./workDictionary";
import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCarousel from "./ImageCarousel";

export default function SelectedWorkPage() {
  const { language } = useLanguage();
  const t = selectedWorkDictionary[language].projects;

  const projectKeys = Object.keys(t);

  return (
    <>
      <Header />

      <main className={styles.page}>
        <h1 className={styles.title}>Selected Work</h1>

        {projectKeys.map((key, index) => {
          const project = t[key];
          const isEven = index % 2 === 0;

          return (
            <section key={key} className={styles.projectSection}>
              <div
                className={`${styles.projectContent} ${
                  isEven ? styles.textRight : styles.textLeft
                }`}
              >
                <div className={styles.textBlock}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.role}>{project.role}</p>
                  <p className={styles.description}>
                    {project.description.split("\n\n").map((paragraph, i) => (
                      <span key={i}>
                        {paragraph}
                        <br />
                        <br />
                      </span>
                    ))}
                  </p>
                </div>

                <div className={styles.imageBlock}>
                  <ImageCarousel folderName={project.folder || key} />
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </>
  );
}
