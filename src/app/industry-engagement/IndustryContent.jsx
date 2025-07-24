"use client";

import { useLanguage } from "../context/LanguageContext";
import industryDictionary from "./industryDictionary";
import IndustryGallery from "./IndustryGallery";
import styles from "./page.module.css";

export default function IndustryContent() {
  const { language } = useLanguage();
  const t = industryDictionary[language];

  const images = [
    { filename: "image1.webp", key: "image1" },
    { filename: "image2.webp", key: "image2" },
    { filename: "image3.webp", key: "image3" },
    { filename: "image4.webp", key: "image4" },
    { filename: "image5.webp", key: "image5" },
    { filename: "image6.webp", key: "image6" },
    { filename: "image7.webp", key: "image7" },
    { filename: "image8.webp", key: "image8" },
    { filename: "image9.webp", key: "image9" },
    { filename: "image10.webp", key: "image10" },
    { filename: "image11.webp", key: "image11" },
    { filename: "image12.webp", key: "image12" },
    { filename: "image13.webp", key: "image13" },
    { filename: "image14.webp", key: "image14" },
    { filename: "image15.webp", key: "image15" },
    { filename: "image16.webp", key: "image16" },
    { filename: "image17.webp", key: "image17" },
    { filename: "image18.webp", key: "image18" },
    { filename: "image19.webp", key: "image19" },
    { filename: "image20.webp", key: "image20" },
    { filename: "image21.webp", key: "image21" },
  ];

  return (
    <>
      <div className={styles.textBlock}>
        <h1 className={styles.title} id="industry-title">{t.title}</h1>
        <p className={styles.intro}>{t.intro}</p>
      </div>

      <div className={styles.imageBlock}>
        <IndustryGallery images={images} captions={t.captions} />
      </div>
    </>
  );
}
