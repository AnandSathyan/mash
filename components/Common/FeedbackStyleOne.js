import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const FeedbackStyleOne = () => {
  return (
    <>
      <section className="clients-section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Says</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar"></div>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="clients-slider"
          >
            <SwiperSlide>
              <div className="clients-item">
                <div className="icon">
                  <i className="flaticon-left-quotes-sign"></i>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley
                </p>

                <div className="clients-content">
                  <h3>Moris Jacker</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="clients-item">
                <div className="icon">
                  <i className="flaticon-left-quotes-sign"></i>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley
                </p>

                <div className="clients-content">
                  <h3>Alex Maxwel</h3>
                  <span>Agent Management</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="clients-item">
                <div className="icon">
                  <i className="flaticon-left-quotes-sign"></i>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley
                </p>

                <div className="clients-content">
                  <h3>Edmond Halley</h3>
                  <span>Web Designer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FeedbackStyleOne;
