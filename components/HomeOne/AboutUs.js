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

      <section className="creative-secton pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="pr-15">
                <div className="creative-content">
                  <h3>
                    How to Generate <span>Creative</span> Ideas for your IT
                    Business
                  </h3>
                  <div className="bar"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incidiunt labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Risus do umsan
                    lacus vel facilisis.Lorem Ipsum is simply dummy text of the
                    industry. Lorem Ipsum has been the industry's.
                  </p>
                </div>

                <div className="skills">
                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Development</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span className="count-text">90</span>%
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "90%" }}
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Design</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span className="count-text">80</span>%
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "80%" }}
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Marketing</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span className="count-text">70</span>%
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "70%" }}
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Support</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span className="count-text">75</span>%
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "75%" }}
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Review</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span className="count-text">90</span>%
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "90%" }}
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="creative-image"
                style={{
                  backgroundImage: `url(/images/about/about.jpg)`,
                }}
              >
                <div className="creative-video">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn popup-youtube"
                  >
                    <i className="bx bx-play"></i>
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
