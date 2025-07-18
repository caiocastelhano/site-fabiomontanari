"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Blurb.module.css";

export default function Blurb({ blurbs }) {
  return (
    <div className={styles.carouselWrapper}>
      <button className="custom-prev" aria-label="Previous slide" type="button">←</button>
      <button className="custom-next" aria-label="Next slide" type="button">→</button>

      <Swiper
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }}
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        className={styles.carousel}
        role="region"
        aria-label="Testimonials carousel"
        aria-live="polite"
      >
        {blurbs.map((blurb, index) => (
          <SwiperSlide key={`${blurb.author}-${index}`}>
            <div className={styles.blurb}>
              <p className={styles.text}>{blurb.text}</p>
              <p className={styles.author}>— {blurb.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
