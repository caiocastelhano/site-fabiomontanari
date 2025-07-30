"use client";

import styles from "./page.module.css";
import { useLanguage } from "../context/LanguageContext";
import aboutDictionary from "./aboutDictionary";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiImdb } from "react-icons/si";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

export default function AboutContent() {
  const { language } = useLanguage();
  const t = aboutDictionary[language];

  const blocks = [
    { key: "multicultural", title: t.multiculturalTitle, text: t.multiculturalText },
    { key: "collaboration", title: t.collaborationTitle, text: t.collaborationText },
    { key: "character", title: t.characterTitle, text: t.characterText },
    { key: "directing", title: t.directingTitle, text: t.directingText },
    { key: "innovation", title: t.innovationTitle, text: t.innovationText },
    { key: "teaching", title: t.teachingTitle, text: t.teachingText },
    { key: "childActor", title: t.childActorTitle, text: t.childActorText },
    { key: "planB", title: t.planBTitle, text: t.planBText }
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>{t.title}</h1>

        <p className={styles.initialText}>{t.intro}</p>

        <div className={styles.blocks}>
          {blocks.map((block) => {
            const [ref, isVisible] = useFadeInOnScroll();

            return (
              <div
                key={block.key}
                ref={ref}
                className={`${styles.textCard} ${styles.fadeWrapper} ${isVisible ? styles.visible : ""}`}
              >
                <h2 className={styles.cardTitle}>{block.title}</h2>
                <div className={styles.cardText}>
                  {typeof block.text === "string" ? <p>{block.text}</p> : block.text}
                </div>
              </div>
            );
          })}
        </div>

        <section className={styles.closing}>
          <h2>{t.closingTitle}</h2>
          <p>
            {t.closingText.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </section>

        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/fabio-montanari-1616a931/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fabio Montanari's LinkedIn profile"
            title="Visit Fabio Montanari's LinkedIn profile"
          >
            <FaLinkedin aria-hidden="true" focusable="false" />
          </a>
          <a
            href="https://www.instagram.com/fabiomontanari/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fabio Montanari's Instagram profile"
            title="Visit Fabio Montanari's Instagram profile"
          >
            <FaInstagram aria-hidden="true" focusable="false" />
          </a>
          <a
            href="https://www.imdb.com/pt/name/nm5888483/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fabio Montanari's IMDb page"
            title="Visit Fabio Montanari's IMDb page"
          >
            <SiImdb aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>
    </main>
  );
}
