import React from "react";
import Link from "next/link";
import Image from "next/image";

const DigitalMarketing = () => {
  return (
    <>
      <section className="digital-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="digital-image">
                <Image
                  src="/images/digital.png"
                  alt="image"
                  width={600}
                  height={640}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="digital-content">
                <h3>
                  Digital <span>Marketing</span>
                </h3>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices Lorem Ipsum is simply dummy
                  tex printing and typesetting industry. Lorem Ipsum has been
                  the industry
                </p>

                <ul className="digital-list">
                  <li>
                    <i className="flaticon-check"></i>
                    SEO Marketing
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    Email Marketing
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    Youtube Marketing
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    Social Marketing
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    Facebook Marketing
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    Page Ranking
                  </li>
                </ul>

                <div className="digital-btn">
                  <Link href="/about" className="default-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
