'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './IndustryGallery.module.css';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import { useLanguage } from '@/app/context/LanguageContext';
import industryDictionary from './industryDictionary';

export default function IndustryGallery({ images }) {
  const { language } = useLanguage();
  const { captions, links, buttonText } = industryDictionary[language];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const goToNext = () => setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  const goToPrev = () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrev();
        if (e.key === 'Escape') closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <div className={styles.grid}>
        {images.map(({ filename, key }, index) => {
          const [ref, isVisible] = useFadeInOnScroll();
          const link = links?.[key];

          return (
            <div
              key={key}
              ref={ref}
              className={`${styles.thumbWrapper} ${styles.fadeWrapper} ${isVisible ? styles.visible : ''}`}
            >
              <button
                className={styles.thumb}
                onClick={() => openModal(index)}
                aria-label={`Open image: ${captions[key]}`}
              >
                <Image
                  src={`/images/industry-engagement/${filename}`}
                  alt={captions[key]}
                  width={300}
                  height={200}
                  className={styles.image}
                  priority={index === 0}
                />
              </button>

              <p className={styles.caption}>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.captionLink}
                  >
                    {captions[key]}
                  </a>
                ) : (
                  captions[key]
                )}
              </p>
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image view"
          onClick={closeModal}
        >
          <button
            className={`${styles.navButton} ${styles.left}`}
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous image"
            disabled={selectedIndex === 0}
          >
            &#8592;
          </button>

          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={styles.closeIcon}
              role="button"
              aria-label="Close modal"
              tabIndex={0}
              onClick={closeModal}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') closeModal();
              }}
            >
              &times;
            </span>

            <div className={styles.fullImageWrapper}>
              <Image
                src={`/images/industry-engagement/${selectedImage.filename}`}
                alt={captions[selectedImage.key]}
                width={1200}
                height={800}
                className={styles.fullImage}
              />
            </div>

            {links[selectedImage.key] ? (
              <p className={styles.caption}>
                <a
                  href={links[selectedImage.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.captionLink}
                >
                  {captions[selectedImage.key]}
                </a>
              </p>
            ) : (
              <p className={styles.caption}>{captions[selectedImage.key]}</p>
            )}
          </div>

          <button
            className={`${styles.navButton} ${styles.right}`}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
            disabled={selectedIndex === images.length - 1}
          >
            &#8594;
          </button>
        </div>
      )}
    </>
  );
}
