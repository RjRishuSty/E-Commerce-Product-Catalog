import React from "react";
import firstImg from "../../assest/1.jpg";
import secImg from "../../assest/2.jpg";
import thirImg from "../../assest/3.jpg";
import fourthImg from "../../assest/4.jpg";
import fifthImg from "../../assest/5.jpg";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const SwiperBox = ({ sectionType }) => {
  const imgData = [
    { name: "offer1", img: firstImg },
    { name: "offer2", img: secImg },
    { name: "offer3", img: thirImg },
    { name: "offer4", img: fourthImg },
    { name: "offer5", img: fifthImg },
  ];
  return (
    <Swiper
      style={{
        md:{width: "100%"},
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin:'1rem 0rem'
      }}
      className="swiper"
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {sectionType === "hero"
        ? imgData.map((item) => (
            <SwiperSlide key={item.name}>
              <img src={item.img} alt={item.name} sx={{ width: "100%" }} />
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
};

export default SwiperBox;
