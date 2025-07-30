'use client';

import styles from './HeroSection.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react';
import { dictionary } from '../../lib/dictionary';

export default function HeroSection({ language = 'en' }) {
  const images = [1, 2, 3, 4];
  const { carouselCaptions = [] } =
    dictionary.hero[language] || dictionary.hero.en;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        modules={[Autoplay, A11y, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" aria-label="Go to slide ${index + 1}"></span>`;
          },
        }}
        navigation
      >
        {images.map((num, index) => (
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
                className={`${styles.slideImage} ${isMobile ? styles.slideImageMobile : ''}`}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                }}
                priority={index === 0}
              />
              <div className={styles.mask} aria-hidden="true" />
              <div className={styles.caption}>
                <div>{carouselCaptions[index].titleLine}</div>
                {carouselCaptions[index].platformLine && (
                  <div className={styles.platform}>{carouselCaptions[index].platformLine}</div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
