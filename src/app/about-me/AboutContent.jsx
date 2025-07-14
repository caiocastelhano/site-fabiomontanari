"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useLanguage } from "../context/LanguageContext";
import aboutDictionary from "./aboutDictionary";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiImdb } from "react-icons/si";

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
    { key: "childActor", title: t.childActorTitle, text: t.childActorText }
  ];

  return (
    <div className={styles.container}>
      {/* TÍTULO DA PÁGINA */}
      <h1 className={styles.pageTitle}>{t.title}</h1>

      {/* TEXTO INICIAL */}
      <p className={styles.initialText}>{t.intro}</p>

      {/* BLOCOS COM TÍTULO E TEXTO */}
      <div className={styles.blocks}>
        {blocks.map((block) => (
          <div key={block.key} className={styles.textCard}>
            <h2 className={styles.cardTitle}>{block.title}</h2>
            <div className={styles.cardText}>
              {typeof block.text === "string" ? <p>{block.text}</p> : block.text}
            </div>
          </div>
        ))}
      </div>

      {/* TEXTO FINAL */}
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

      {/* ÍCONES DE REDES SOCIAIS */}
      <div className={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/fabio-montanari-1616a931/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/fabiomontanari/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.imdb.com/pt/name/nm5888483/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IMDb"
          title="IMDb"
        >
          <SiImdb />
        </a>
      </div>
    </div>
  );
}
