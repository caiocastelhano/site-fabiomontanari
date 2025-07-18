"use client";

import { useState, useEffect, useMemo } from "react";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ folderName, totalImages, alts = [], videos = [] }) {
  const [mediaItems, setMediaItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const stableVideos = useMemo(() => videos, []);
  const stableAlts = useMemo(() => alts, []);

  // Monta a lista combinada de imagens e vídeos
  useEffect(() => {
    if (!folderName || !totalImages) return;

    const images = Array.from({ length: totalImages }, (_, i) => ({
      type: "image",
      src: `/images/selected-work/${folderName}/image${i + 1}.webp`,
      alt: stableAlts[i] || `Image ${i + 1} of ${totalImages} from project ${folderName}`
    }));

    const videoItems = stableVideos.map((url, i) => ({
      type: "video",
      src: url,
      alt: `Video ${i + 1} from project ${folderName}`
    }));

    setMediaItems([...videoItems, ...images]);
    setCurrentIndex(0);
  }, [folderName, totalImages, stableVideos, stableAlts]);

  // Swipe para mobile
  useEffect(() => {
    if (mediaItems.length === 0) return;

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
  }, [currentIndex, mediaItems]);

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < mediaItems.length - 1) setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    setIsLoaded(false);
  }, [currentIndex]);

  if (mediaItems.length === 0) return null;

  return (
    <div
      className={styles.imageWrapper}
      role="region"
      aria-label={`Media carousel for project ${folderName}`}
      aria-live="polite"
    >
      {mediaItems.length > 1 && (
        <button
          onClick={goPrev}
          className={styles.arrowLeft}
          disabled={currentIndex === 0}
          aria-label="Previous media"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M19 12H5M11 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Renderiza imagem ou vídeo */}
      {mediaItems[currentIndex].type === "image" ? (
        <img
          key={mediaItems[currentIndex].src}
          src={mediaItems[currentIndex].src}
          alt={mediaItems[currentIndex].alt}
          className={`${styles.image} ${isLoaded ? styles.loaded : ""}`}
          onLoad={() => setIsLoaded(true)}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          decoding="async"
          tabIndex="0"
        />
      ) : (
        <div className={styles.videoWrapper}>
          <iframe
            key={mediaItems[currentIndex].src}
            src={mediaItems[currentIndex].src}
            title={mediaItems[currentIndex].alt}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {mediaItems.length > 1 && (
        <button
          onClick={goNext}
          className={styles.arrowRight}
          disabled={currentIndex === mediaItems.length - 1}
          aria-label="Next media"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
