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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices Lorem Ipsum is simply dummy
                  tex printing and typesetting industry. Lorem Ipsum has been
                  the industry
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
