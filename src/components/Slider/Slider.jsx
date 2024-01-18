import { useState } from "react";
import { Swiper } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import style from "./Slider.module.scss";
import { API_URL } from "../../const";

export const Slider = (data) => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(data);

  return (
    <div className={style.picture}>
      <div className={style.sliderMain}>
        {data ? (
          <>
            <Swiper
              modules={[Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              onSwiper={setMainSwiper}
              spaceBetween={14}>
              <SwiperSlide>
                <img
                  src={`${API_URL}${data.data.images[0]}`}
                  alt="Кресло"
                  className={style.photo}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/photo.jpg" alt="Кресло" className={style.photo} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/photo.jpg" alt="Кресло" className={style.photo} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/photo.jpg" alt="Кресло" className={style.photo} />
              </SwiperSlide>
            </Swiper>
            <button onClick={() => mainSwiper.slidePrev()}>Prev</button>
            <button onClick={() => mainSwiper.slideNext()}>Next</button>
          </>
        ) : (
          <div>Загрузка...</div>
        )}
      </div>
      <div className={style.sliderThumbnails}>
        {data ? (
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            watchSlidesProgress
            spaceBetween={14}
            slidesPerView={4}
            freeMode>
            <SwiperSlide>
              <img src="/photo.jpg" alt="Кресло" className={style.photo} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/photo.jpg" alt="Кресло" className={style.photo} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/photo.jpg" alt="Кресло" className={style.photo} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/photo.jpg" alt="Кресло" className={style.photo} />
            </SwiperSlide>
          </Swiper>
        ) : (
          <div>Загрузка...</div>
        )}
      </div>
    </div>
  );
};
