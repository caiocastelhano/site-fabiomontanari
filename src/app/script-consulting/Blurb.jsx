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
      {/* SETAS FORA DO SWIPER */}
      <div className="custom-prev" aria-label="Previous slide">←</div>
      <div className="custom-next" aria-label="Next slide">→</div>

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
      >
        {blurbs.map((blurb, index) => (
          <SwiperSlide key={index}>
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
