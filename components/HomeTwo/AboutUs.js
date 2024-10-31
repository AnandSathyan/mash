import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const AboutUs = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="work-section pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="work-content">
                <h3>
                  Brainstorming, <span>Researching</span> Planning, Strategizing
                  Work
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  dood tempor incididunt ut labore et dolore magna aliqua. Quis
                  ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas.
                </p>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="work-status">
                      <h3>
                        <span className="odometer">50</span>
                        <span className="sign-icon">+</span>
                      </h3>
                      <h4>Completed Project</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur do eiusmod tempor
                        incididunt ut labore et dolore.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="work-status">
                      <h3>
                        <span className="odometer">98</span>
                        <span className="sign-icon">%</span>
                      </h3>
                      <h4>Customer Satisfaction</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur do eiusmod tempor
                        incididunt ut labore et dolore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div
                className="work-image"
                style={{
                  backgroundImage: `url(/images/work-bg.jpg)`,
                }}
              >
                <div className="work-video">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="flaticon-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
