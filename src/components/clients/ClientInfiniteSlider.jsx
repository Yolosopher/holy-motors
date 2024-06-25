import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { generateRandomId } from "@/lib";

const ClientInfiniteSlider = ({ row, reverseDirection }) => {
  const uniqueId = generateRandomId();
  return (
    <Swiper
      slidesPerView={row.length - 1 > 6 ? 6 : row.length - 1}
      spaceBetween={30}
      loop={true}
      speed={5000}
      draggable={false}
      autoplay={{
        reverseDirection,
        delay: 0,
        disableOnInteraction: false,
      }}
      // centeredSlides={true}
      modules={[Autoplay]}
      className={`swiper-container clients-swiper swiper-${uniqueId}`}
    >
      {row.map((client, index) => (
        <SwiperSlide key={index}>
          <img className="client-img" src={client.image} alt={client.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientInfiniteSlider;
