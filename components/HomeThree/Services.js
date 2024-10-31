import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <section className="services-section bg-color pt-100 pb-70">
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
                <div className="icon bg-79e8e2">
                  <i className="flaticon-setting"></i>
                </div>
                <h3>Web Development</h3>
                <p>
                  Bringing Innovation For Global Businesses
                  <br />
                  {isExpanded ? (
                    // Full content when expanded
                    <>
                      Being a reliable web development partner, we hold
                      expertise in offering enhanced website development
                      services that can bring revolution to our global clients.
                      Our web development team has served industry-specific
                      solutions to businesses of different sizes. We have been
                      serving innovative and excellent solutions, to global
                      businesses to enhance their web presence. Leveraging our
                      web development proficiency to work with different website
                      development technologies, we help them stand out from the
                      competition. Whether it could be the need to develop
                      robust websites, web applications, or web portals; our web
                      developers make sure to bring the best results out there.
                    </>
                  ) : (
                    // Short content when collapsed
                    " Being a reliable web development partner, we hold expertise in offering enhanced website development services..."
                  )}
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                {/* <div className="icon bg-deb0fe">
                  <i className="flaticon-it"></i>
                </div> */}
                <div className="icon bg-fe929f">
                  <i className="flaticon-shopping-cart"></i>
                </div>
                <h3>Ecommerce Website Development</h3>
                <p>
                {isExpanded ? (
                    // Full content when expanded
                    <>
                Our dedicated web developers can build B2B and B2C online storefronts and multi-vendor marketplaces to help you start selling online. From ideation to implementation and performance tuning - we offer comprehensive eCommerce website development services.
                </>
                 ) : (
                  // Short content when collapsed
                  " Our dedicated web developers can build B2B and B2C online storefronts and multi-vendor marketplaces to help you start selling online.  From ideation to implementation and performance..."
                )}
                </p>
                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-fcc774">
                  <i className="flaticon-promotion"></i>
                </div>
                <h3>Industry-specific Business Solutions
</h3>
                <p>
                {isExpanded ? (
                    // Full content when expanded
                    <>
                From healthcare to retail, education to entertainment - our business solutions are equipped to overcome various industry-specific challenges and stand out from the crowd. Rely on our top-of-the-line expertise to build a high-end solution at an affordable price.
                </>
                 ) : (
                  // Short content when collapsed
                  " From healthcare to retail, education to entertainment - our business solutions are equipped to overcome various industry-specific challenges and stand out from the crowd...."
                )}
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-84b7fd">
                  <i className="flaticon-cellphone"></i>
                </div>
                <h3 className="text-capitalize text-uppercase">Mobile App Development</h3>
                <p>
                {isExpanded ? (
                    // Full content when expanded
                    <>
                lding an app, we focus on three basic aspects - the look, the ease of use, and the conversion potential. While the UI/UX attracts the customers in the first place, a robust architecture & top-notch security determine the life of an app in the long run. We believe an app that delivers value to the users will eventually drive conversions for your business. Here is an overview of the holistic approach we adopt while providing mobile app development services.
User First Strategy - UI/UX

We consider the needs and preferences of the users while planning an app development strategy. If they find your app easy to operate, its popularity will grow and it’ll cut through the competition.
Adaptability - Screen Sizes & Devices

We build the interface of application adaptable to variations. We make sure that the text is readable and the navigation fits within the screen for a wide range of makes and models.
Minimize Action Sequences

Reducing the number of actions in an app effectively helps the users to accomplish a task quickly. Hence, we do the needful to simplify the user journey in the app.
Security

Our mobile app makers implement all the safety measures to protect sensitive data shared by the users. Further, we disclose the purpose of collecting every data to make the users feel comfortable using the app.
Brand Focused

Top mobile app development services are always tailored as per your requirement. We research your business extensively before starting the development process.
Marketing & Promotion

Our app store optimization services help your application to stand out from the crowd in the app market of the iOS and Android platforms.
</>
                 ) : (
                  // Short content when collapsed
                  "lding an app, we focus on three basic aspects - the look, the ease of use, and the conversion potential...."
                )}
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                 <div className="icon bg-deb0fe">
                  <i className="flaticon-it"></i>
                </div>
                <h3>
                {/* ECOMMERCE WEBSITE DEVELOPMENT SERVICES */}
                Ecommerce Website Development Service
</h3>
                <p>
                {isExpanded ? (
                    // Full content when expanded
                    <>
                Are you planning to expand your business by reaching out to your customers online? An eCommerce website would be the best option to enhance your customer base and increase your sales. Whether you want to create your first online store or upgrade an existing one, we can help you out with our results-driven eCommerce website development services. Hire experienced eCommerce website developers from Webguru Infosystems to build a top-notch online store and attract more customers. We promise you a rich user interface, seamless checkout process, advanced security features, easy-to-manage product inventory and much more.
                </>
                 ) : (
                  // Short content when collapsed
                  "Are you planning to expand your business by reaching out to your customers online? ...."
                )}
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-2e1342">
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

export default Services;
