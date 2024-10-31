import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="main-banner-area-three">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container mt-50">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <span>E-Commerce </span>
                    <h1>Web & Mobile App Development Experts in Kuwait</h1>
                    <p>
                    Company with a powerful team in ecommerce website design and mobile app development. Our web design company specializes in ecommerce website development, SEO services, KNET integration, and iOS app development for iPhone/iPad, as well as Android apps development. We offer comprehensive web design services in Kuwait, including mobile app development.
                    </p>

                    <div className="banner-btn">
                      <Link href="/contact" className="default-btn">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="banner-image">
                    <Image
                      src="/images/home-three/home-three-shape1.png"
                      alt="image"
                      width={100}
                      height={200}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-three/home-three-shape2.png"
                      alt="image"
                      width={100}
                      height={200}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-three/home-three-shape3.png"
                      alt="image"
                      width={100}
                      height={200}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-three/home-three-shape4.png"
                      alt="image"
                      width={250}
                      height={350}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-three/home-three-shape5.png"
                      alt="image"
                      width={500}
                      height={500}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />

                    <Image
                      src="/images/home-three/main-img3.png"
                      alt="image"
                      width={1000}
                      height={720}
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
