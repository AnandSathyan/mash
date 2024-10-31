import React from "react";
import Image from "next/image";

const WorkingProcess = () => {
  return (
    <>
      <div className="overview-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="overview-content">
                <div className="icon">
                  <i className="flaticon-edit"></i>
                </div>
                <h3>Sketch</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-content">
                <div className="icon">
                  <i className="flaticon-thinking"></i>
                </div>
                <h3>Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-content">
                <div className="icon">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>Testing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-content">
                <div className="icon">
                  <i className="flaticon-software"></i>
                </div>
                <h3>Develop</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
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

export default WorkingProcess;
