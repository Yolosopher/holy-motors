import Slide from "./Slide";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "./projects.style.scss";
import ArrowLeft from "../shared/ArrowLeft";
import ArrowRight from "../shared/ArrowRight";
import { useState } from "react";

const Slider = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="projects-section" id="projects">
      <div className="swiper-line-pagination">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`swiper-line${
              index + 1 === currentPage ? " active" : ""
            }`}
          ></div>
        ))}
      </div>
      <div className="swiper-page-number">0{currentPage}</div>
      <div className="swiper-nav-btns">
        <div className="swiper-nav project-swiper-left">
          <ArrowLeft />
        </div>
        <div className="swiper-nav project-swiper-right">
          <ArrowRight />
        </div>
      </div>
      <div className="projects-swiper">
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
            nextEl: ".project-swiper-right",
            prevEl: ".project-swiper-left",
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
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Slide project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
