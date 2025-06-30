'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './IndustryGallery.module.css';

export default function IndustryGallery({ images, captions }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className={styles.grid}>
        {images.map(({ filename, key }) => (
          <div
            key={key}
            className={styles.thumb}
            onClick={() =>
              setSelectedImage({ src: `/images/industry-research/${filename}`, alt: captions[key] })
            }
          >
            <Image
              src={`/images/industry-research/${filename}`}
              alt={captions[key]}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Ícone de fechar */}
            <span className={styles.closeIcon} onClick={() => setSelectedImage(null)} aria-label="Fechar modal">
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
