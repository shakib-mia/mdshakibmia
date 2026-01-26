"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { IoIosExpand } from "react-icons/io";

const GallerySlider = ({ images }) => {
  //   console.log(images);
  const [selectedImage, setSelectedImage] = React.useState(-1);

  return (
    <div
      id="project-gallery"
      className={images.length > 1 ? "w-full" : "mx-auto w-full lg:w-1/2"}
    >
      {selectedImage !== -1 && (
        <div
          className="absolute w-full h-full bg-black/20 top-0 left-0 z-99999999 overflow-y-auto py-20"
          onClick={() => setSelectedImage(-1)}
        >
          {/* {selectedImage} */}
          <Image
            src={images[selectedImage]}
            alt={`Selected Image ${selectedImage + 1}`}
            width={800}
            height={600}
            className="object-contain mx-auto lg:w-1/2 shadow-xl shadow-black rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className="fixed top-6 right-6 text-white text-3xl font-bold cursor-pointer"
            onClick={() => setSelectedImage(-1)}
          >
            &times;
          </div>
        </div>
      )}
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
          <SwiperSlide key={index} className="relative overflow-hidden group">
            <Image
              src={imgSrc}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              className="object-cover rounded-lg aspect-389/272 object-top w-full"
            />
            <div
              className="absolute w-full h-full bg-black/20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex 
              justify-center items-center text-white text-6xl font-bold"
              onClick={() => setSelectedImage(index)}
            >
              <div className="w-20 h-20 flex justify-center items-center rounded-full bg-accent">
                <IoIosExpand />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
