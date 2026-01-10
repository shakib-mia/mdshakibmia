"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const GallerySlider = ({ images }) => {
  //   console.log(images);
  return (
    <div
      id="project-gallery"
      className={images.length > 1 ? "w-full" : "mx-auto w-1/2"}
    >
      <Swiper
        spaceBetween={16}
        // slidesPerView={images.length > 2 ? 2 : 1}
        modules={[Pagination]}
        className="overflow-visible!"
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1, spaceBetween: 24 },
          1024: { slidesPerView: images.length > 2 ? 2 : 1 },
        }}
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <Image
              src={imgSrc}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              className="object-cover rounded-lg aspect-389/272 object-top w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
