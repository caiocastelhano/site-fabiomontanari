"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Blurb.module.css";

export default function Blurb({ blurbs }) {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
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
  );
}
