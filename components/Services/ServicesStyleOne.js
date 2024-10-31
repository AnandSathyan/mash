import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesStyleOne = () => {
  return (
    <>
      <section className="services-section pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <h2>IT Agency Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-it"></i>
                </div>
                <h3>IT Consultancy</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-setting"></i>
                </div>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-promotion"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-cellphone"></i>
                </div>
                <h3>App Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-shopping-cart"></i>
                </div>
                <h3>E-commerce Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-optimize"></i>
                </div>
                <h3>IT Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <Link href="#" className="prev page-numbers">
                  <i className="flaticon-left"></i>
                </Link>

                <Link href="#" className="page-numbers">
                  1
                </Link>

                <span className="page-numbers current" aria-current="page">
                  2
                </span>

                <Link href="#" className="page-numbers">
                  3
                </Link>

                <Link href="#" className="page-numbers">
                  4
                </Link>

                <Link href="#" className="next page-numbers">
                  <i className="flaticon-right"></i>
                </Link>
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
      </section>
    </>
  );
};

export default ServicesStyleOne;
