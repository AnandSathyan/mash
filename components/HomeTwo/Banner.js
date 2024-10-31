import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="main-banner-area-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid mt-50">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1>Be Unique With Luzon IT Startup</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      incididunt ut laboredolore magna aliqua elsed tempomet,
                      consectetur adipiscing.
                    </p>

                    <div className="banner-btn">
                      <Link href="/contact" className="default-btn">
                        Get Started
                      </Link>

                      <Link href="/contact" className="optional-btn">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="banner-image">
                    <Image
                      src="/images/home-two/home-two-shape1.png"
                      alt="image"
                      width={200}
                      height={500}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-two/home-two-shape2.png"
                      alt="image"
                      width={170}
                      height={170}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-two/home-two-shape3.png"
                      alt="image"
                      width={280}
                      height={500}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-two/home-two-shape4.png"
                      alt="image"
                      width={1000}
                      height={700}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-two/home-two-shape5.png"
                      alt="image"
                      width={200}
                      height={500}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-two/main-img-2.png"
                      alt="image"
                      width={890}
                      height={589}
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
        <div className="banner-shape">
          <Image
            src="/images/home-two/cloud.png"
            alt="image"
            className="w-100"
            width={1920}
            height={300}
          />
        </div>

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
