import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <>
      <section className="app-section pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="app-image">
                <Image
                  src="/images/app.png"
                  alt="image"
                  width={545}
                  height={570}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="app-content">
                <h3>How Does The App Work?</h3>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

              <div className="app-inner-text">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>Make your Profile</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>

              <div className="app-inner-text">
                <div className="icon">
                  <i className="flaticon-cloud-computing"></i>
                </div>
                <h3>Download It For Free</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>

              <div className="app-inner-text">
                <div className="icon">
                  <i className="flaticon-cellphone"></i>
                </div>
                <h3>Enjoy This App</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
