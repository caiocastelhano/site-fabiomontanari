'use client';

import styles from './HeroSection.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSection({ language = 'en' }) {
  const images = [1, 2, 3, 4];

  return (
    <section
      className={styles.heroSection}
      aria-label={
        language === 'pt'
          ? 'Seção inicial com carrossel de imagens'
          : 'Hero section with image carousel'
      }
    >
      <Swiper
        className={styles.heroSwiper}
        modules={[Autoplay, A11y, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {images.map((num) => (
          <SwiperSlide key={num}>
            <div className={styles.slideWrapper}>
              <Image
                src={`/images/hero/image${num}.webp`}
                alt={
                  language === 'pt'
                    ? `Imagem ${num} do carrossel`
                    : `Image ${num} from the carousel`
                }
                fill
                className={styles.slideImage}
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
              <div className={styles.mask} aria-hidden="true" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
