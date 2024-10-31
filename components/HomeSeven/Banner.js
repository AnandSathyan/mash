import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="main-banner-area-seven">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid mt-50">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <span>Digital Marketing</span>
                    <h1>Digital Service With Excellent Quality</h1>
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
                </div>

                <div className="col-lg-6 pr-0">
                  <div className="banner-image">
                    <Image
                      src="/images/home-seven/home-se-shape1.png"
                      alt="image"
                      width={200}
                      height={200}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/home-se-shape2.png"
                      alt="image"
                      width={200}
                      height={200}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/home-se-shape3.png"
                      alt="image"
                      width={200}
                      height={200}
                      data-aos="fade-right"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/home-se-shape4.png"
                      alt="image"
                      width={200}
                      height={200}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/home-se-shape5.png"
                      alt="image"
                      width={200}
                      height={200}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/home-se-shape6.png"
                      alt="image"
                      width={200}
                      height={200}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/home-se-shape7.png"
                      alt="image"
                      width={300}
                      height={260}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/home-se-shape8.png"
                      alt="image"
                      width={300}
                      height={300}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/home-se-shape9.png"
                      alt="image"
                      width={190}
                      height={190}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/home-se-shape10.png"
                      alt="image"
                      width={100}
                      height={120}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/home-se-shape11.png"
                      alt="image"
                      width={1366}
                      height={846}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-seven/main-img7.png"
                      alt="image"
                      width={1190}
                      height={758}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-shape">
          <div className="shape-1">
            <Image
              src="/images/shape/shape4.png"
              alt="image"
              width={15}
              height={15}
            />
          </div>
          <div className="shape-2 rotateme">
            <Image
              src="/images/shape/shape5.svg"
              alt="image"
              width={22}
              height={22}
            />
          </div>
          <div className="shape-3">
            <Image
              src="/images/shape/shape6.svg"
              alt="image"
              width={21}
              height={20}
            />
          </div>
          <div className="shape-4">
            <Image
              src="/images/shape/shape7.png"
              alt="image"
              width={18}
              height={18}
            />
          </div>
          <div className="shape-5">
            <Image
              src="/images/shape/shape8.png"
              alt="image"
              width={12}
              height={11}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
