import React from "react";
import Image from "next/image";

const WorkingProcess = () => {
  return (
    <>
      <section className="process-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="process-content">
                <h3>
                  <span>01</span> Strategy
                </h3>

                <div className="image">
                  <Image
                    src="/images/process/process1.png"
                    alt="image"
                    width={480}
                    height={830}
                  />
                </div>

                <div className="content">
                  <h4>Brand Strategy & Art Direction</h4>
                  <p>
                    Creating a higher spacing For people through Unique
                    Campaigns
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="process-content">
                <h3>
                  <span>02</span> Design
                </h3>

                <div className="image">
                  <Image
                    src="/images/process/process2.png"
                    alt="image"
                    width={480}
                    height={830}
                  />
                </div>

                <div className="content">
                  <h4>UI/UX Design & Mobile App Design</h4>
                  <p>
                    Creating a higher spacing For people through Unique
                    Campaigns
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="process-content">
                <h3>
                  <span>03</span> Develop
                </h3>

                <div className="image">
                  <Image
                    src="/images/process/process3.png"
                    alt="image"
                    width={480}
                    height={830}
                  />
                </div>

                <div className="content">
                  <h4>Digital Experience and Branding</h4>
                  <p>
                    Creating a higher spacing For people through Unique
                    Campaigns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingProcess;
