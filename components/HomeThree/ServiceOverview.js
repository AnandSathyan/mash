import React from "react";
import Image from "next/image";

const ServiceOverview = () => {
  return (
    <>
      <section className="design-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="design-image">
                <Image
                  src="/images/design.png"
                  alt="image"
                  width={670}
                  height={670}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="design-content">
                <h3>
                  Design <span>Development</span>
                </h3>
                <div className="bar"></div>
                <p>
                Our Design & Development services focus on creating impactful, user-centered digital experiences. We bring ideas to life through innovative design paired with seamless functionality, ensuring that every project we deliver is visually engaging, highly responsive, and optimized for performance. From website development to mobile applications, our team combines creativity with technical expertise to build solutions that captivate users and drive results. Let us help transform your vision into a reality that makes a lasting impression.
                </p>

                <ul className="design-list">
                  <li>
                    <i className="flaticon-check"></i>
                    Web Development
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    Laravel Design
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    App Development
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    Responsive Design
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    UI/UX Design
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    Unique Design
                  </li>
                </ul>
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

export default ServiceOverview;
