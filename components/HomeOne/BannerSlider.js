import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const BannerSlider = () => {
  return (
    <>
      <div className="main-banner-area">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          className="home-sliders"
        >
          <SwiperSlide>
            <div 
              className="home-item"
              style={{
                backgroundImage: `url(/images/home-one/slider-bg.jpg)`
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container mt-50">
                    <div className="main-banner-content">
                      <h1>Make Real-Life Connections With IT</h1>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        incididunt ut laboredolore magna aliqua elsed tempomet,
                        consectetur adipiscing.
                      </p>

                      <div className="banner-btn">
                        <Link href="/contact" className="default-btn">
                          Get Started
                        </Link>
                      </div>
                    </div>

                    <div className="banner-image">
                      <Image
                        src="/images/home-one/home-1-shape.png"
                        alt="Image"
                        width={634}
                        height={696}
                      />
                      <Image
                        src="/images/home-one/home-1-img1.png"
                        className="banner-img"
                        alt="image"
                        width={510}
                        height={495}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div 
              className="home-item"
              style={{
                backgroundImage: `url(/images/home-one/slider-bg-2.jpg)`
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container mt-50">
                    <div className="main-banner-content">
                      <h1>Software & Development</h1>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        incididunt ut laboredolore magna aliqua elsed tempomet,
                        consectetur adipiscing.
                      </p>

                      <div className="banner-btn">
                        <Link href="/contact" className="default-btn">
                          Get Started
                        </Link>
                      </div>
                    </div>

                    <div className="banner-image">
                      <Image
                        src="/images/home-one/home-1-shape.png"
                        alt="Image"
                        width={634}
                        height={696}
                      />
                      <Image
                        src="/images/home-one/home-1-img2.png"
                        className="banner-img"
                        alt="image"
                        width={510}
                        height={495}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div 
              className="home-item"
              style={{
                backgroundImage: `url(/images/home-one/slider-bg-3.jpg)`
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container mt-50">
                    <div className="main-banner-content">
                      <h1>Digital Agency & Marketing</h1>

                      <p>
                      Company with a powerful team in ecommerce website design and mobile app development. Our web design company specializes in ecommerce website development, SEO services, KNET integration, and iOS app development for iPhone/iPad, as well as Android apps development. We offer comprehensive web design services in Kuwait, including mobile app development.
                      </p>

                      <div className="banner-btn">
                        <Link href="/contact" className="default-btn">
                          Get Started
                        </Link>
                      </div>
                    </div>

                    <div className="banner-image">
                      <Image
                        src="/images/home-one/home-1-shape.png"
                        alt="Image"
                        width={634}
                        height={696}
                      />
                      <Image
                        src="/images/home-one/home-1-img3.png"
                        className="banner-img"
                        alt="image"
                        width={510}
                        height={495}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BannerSlider;
