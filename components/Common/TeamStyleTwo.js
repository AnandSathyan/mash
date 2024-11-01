import React from "react";
import Image from "next/image";

const TeamStyleTwo = () => {
  return (
    <>
      <section className="team-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Expert Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="image">
                  <Image
                    src="/images/team/team1.jpg"
                    alt="image"
                    width={365}
                    height={490}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>David Jon Korola</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="image">
                  <Image
                    src="/images/team/team2.jpg"
                    alt="image"
                    width={365}
                    height={490}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>Alex Maxwel</h3>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="image">
                  <Image
                    src="/images/team/team3.jpg"
                    alt="image"
                    width={365}
                    height={490}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>Louis Pasteur</h3>
                  <span>App Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamStyleTwo;
