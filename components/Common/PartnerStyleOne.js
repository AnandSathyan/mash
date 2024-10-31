import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const PartnerStyleOne = () => {
  return (
    <>
      <div className="partner-section ptb-100">
        <div className="container">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-slider"
          >
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partners/partner1.png"
                    alt="partner"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partners/partner2.png"
                    alt="partner"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partners/partner3.png"
                    alt="partner"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partners/partner4.png"
                    alt="partner"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partners/partner5.png"
                    alt="partner"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnerStyleOne;
