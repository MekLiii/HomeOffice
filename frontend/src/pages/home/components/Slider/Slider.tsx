import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { SilderContainer, Slide } from "./style";

const Slider = () => {
  return (
    <SilderContainer>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {[1, 2, 3].map((item) => (
          <SwiperSlide>
            <img src={`/img/sample-${item}.jpg`} style={{ width: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SilderContainer>
  );
};

export default Slider;
