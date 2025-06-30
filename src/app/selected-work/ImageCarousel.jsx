"use client";

import { useState, useEffect } from "react";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ folderName }) {
  const [imageCount, setImageCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const urls = [];

    for (let i = 1; i <= 10; i++) {
        const url = `/images/selected-work/${folderName}/image${i}.jpg`;
        urls.push(url);
    }

    // Verifica de fato se os arquivos existem (opcional)
    const checkImages = async () => {
        const validUrls = [];
        for (const url of urls) {
        const res = await fetch(url, { method: "HEAD" });
        if (res.ok) validUrls.push(url);
        }

        setImageUrls(validUrls);
        setImageCount(validUrls.length);
        setCurrentIndex(0);
    };

    checkImages();
    }, [folderName]);

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < imageCount - 1) setCurrentIndex(currentIndex + 1);
  };

  if (imageCount === 0) return null;

  return (
    <div className={styles.carousel}>
      {imageCount > 1 && (
        <button
          onClick={goPrev}
          className={styles.arrowLeft}
          disabled={currentIndex === 0}
          aria-label="Previous image"
        >
          ←
        </button>
      )}

      <img
        src={imageUrls[currentIndex]}
        alt={`Project image ${currentIndex + 1}`}
        className={styles.image}
      />

      {imageCount > 1 && (
        <button
          onClick={goNext}
          className={styles.arrowRight}
          disabled={currentIndex === imageCount - 1}
          aria-label="Next image"
        >
          →
        </button>
      )}
    </div>
  );
}
