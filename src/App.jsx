import "./App.scss";
import Clients from "./components/clients/Clients";
import Navigation from "./components/navigation/Navigation";
import Projects from "./components/projects/Projects";
import Story from "./components/story/Story";
import Works from "./components/works/Works";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import { useState } from "react";

function App() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <>
      <Swiper
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        mousewheel={{
          enabled: true,
          releaseOnEdges: true,
        }}
        speed={1000}
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        className="scroll-swiper"
        modules={[Mousewheel, Keyboard]}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
      >
        <SwiperSlide>
          <Navigation swiperInstance={swiperInstance} />
        </SwiperSlide>
        <SwiperSlide>
          <Projects />
        </SwiperSlide>
        <SwiperSlide>
          <Works />
        </SwiperSlide>
        <SwiperSlide>
          <Clients />
        </SwiperSlide>
        <SwiperSlide>
          <Story />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
