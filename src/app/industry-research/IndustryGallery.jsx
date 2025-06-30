'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './IndustryGallery.module.css';

export default function IndustryGallery({ images, captions }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className={styles.grid}>
        {images.map(({ filename, key }, index) => (
          <button
            key={key}
            className={styles.thumb}
            onClick={() =>
              setSelectedImage({
                src: `/images/industry-research/${filename}`,
                alt: captions[key],
              })
            }
            aria-label={`Open image: ${captions[key]}`}
          >
            <Image
              src={`/images/industry-research/${filename}`}
              alt={captions[key]}
              width={300}
              height={200}
              className={styles.image}
              priority={index === 0} // performance: prioriza a primeira imagem
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image view"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={styles.closeIcon}
              role="button"
              aria-label="Close modal"
              tabIndex={0}
              onClick={() => setSelectedImage(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(null);
                }
              }}
            >
              &times;
            </span>

            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={500}
              className={styles.fullImage}
            />
            <p className={styles.caption}>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
