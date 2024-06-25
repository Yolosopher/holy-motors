import Slide from "./Slide";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "./works.style.scss";
import ArrowLeft from "../shared/ArrowLeft";
import ArrowRight from "../shared/ArrowRight";

const Slider = ({ works }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="works-section">
      <div className="pag-nav-box">
        <div className="swiper-line-pagination">
          {works.map((_, index) => (
            <div
              key={index}
              className={`swiper-line${
                index + 1 === currentPage ? " active" : ""
              }`}
            ></div>
          ))}
        </div>
        <div className="bottom">
          <div className="swiper-page-number">0{currentPage}</div>
          <div className="swiper-nav-btns">
            <div className="swiper-nav work-swiper-left">
              <ArrowLeft />
            </div>
            <div className="swiper-nav work-swiper-right">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="works-swiper">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          navigation={{
            nextEl: ".work-swiper-right",
            prevEl: ".work-swiper-left",
            disabledClass: "disabled",
          }}
          speed={700}
          onSlideChange={(swiper) => {
            setCurrentPage(swiper.activeIndex + 1);
          }}
          modules={[EffectCreative, Navigation]}
          className="swiper-container"
          spaceBetween={40}
          slidesPerView={1}
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <Slide work={work} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
