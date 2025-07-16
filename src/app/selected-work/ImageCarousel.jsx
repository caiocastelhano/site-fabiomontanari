"use client";

import { useState, useEffect } from "react";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ folderName, totalImages, alts = [] }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Gera URLs com base no número passado, sem usar fetch
  useEffect(() => {
    if (!folderName || !totalImages) return;

    const urls = [];

    for (let i = 1; i <= totalImages; i++) {
      urls.push(`/images/selected-work/${folderName}/image${i}.webp`);
    }

    setImageUrls(urls);
    setCurrentIndex(0);
  }, [folderName, totalImages]);

  // Swipe para mobile
  useEffect(() => {
    if (imageUrls.length === 0) return;

    const wrapper = document.querySelector(`.${styles.imageWrapper}`);
    if (!wrapper) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    };

    wrapper.addEventListener("touchstart", handleTouchStart);
    wrapper.addEventListener("touchend", handleTouchEnd);

    return () => {
      wrapper.removeEventListener("touchstart", handleTouchStart);
      wrapper.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, imageUrls]);

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < imageUrls.length - 1) setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    setIsLoaded(false);
  }, [currentIndex]);

  if (imageUrls.length === 0) return null;

  return (
    <div
      className={styles.imageWrapper}
      role="region"
      aria-label={`Image carousel for project ${folderName}`}
      aria-live="polite"
    >
      {imageUrls.length > 1 && (
        <button
          onClick={goPrev}
          className={styles.arrowLeft}
          disabled={currentIndex === 0}
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M19 12H5M11 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      <img
        key={imageUrls[currentIndex]}
        src={imageUrls[currentIndex]}
        alt={alts[currentIndex] || `Image ${currentIndex + 1} of ${imageUrls.length} from project ${folderName}`}
        className={`${styles.image} ${isLoaded ? styles.loaded : ""}`}
        onLoad={() => setIsLoaded(true)}
        loading={currentIndex === 0 ? "eager" : "lazy"}
        decoding="async"
        tabIndex="0"
      />

      {imageUrls.length > 1 && (
        <button
          onClick={goNext}
          className={styles.arrowRight}
          disabled={currentIndex === imageUrls.length - 1}
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
