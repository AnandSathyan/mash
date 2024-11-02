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
              Our agency offers a full suite of IT solutions tailored to meet
              modern business needs. From custom software development and
              cybersecurity to cloud integration and IT consulting, we provide
              innovative services designed to drive efficiency, security, and
              growth. Let us help transform your technology landscape and propel
              your business forward.
            </p>
            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-79e8e2">
                  <i className="flaticon-setting"></i>
                </div>
                <h3>Web Design & Development</h3>
                <p>
                
                  {isExpanded ? (
                    // Full content when expanded
                    <>
                     Make a lasting impression with a professionally designed and user-friendly website. Our web design and development team crafts custom websites tailored to your brand, ensuring maximum impact and visibility online. Elevate your online presence with our unique designs.

                    </>
                  ) : (
                    // Short content when collapsed
                    "Make a lasting impression with a professionally designed and user-friendly website. Our web design and development team crafts custom websites tailored to your brand, ensuring maximum impact and visibility online. Elevate your online presence with our unique designs."
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
                      Our dedicated web developers can build B2B and B2C online
                      storefronts and multi-vendor marketplaces to help you
                      start selling online. From ideation to implementation and
                      performance tuning - we offer comprehensive eCommerce
                      website development services.
                    </>
                  ) : (
                    // Short content when collapsed
                    "Our dedicated web developers can build B2B and B2C online storefronts and multi-vendor marketplaces to help you start selling online. From ideation to implementation and performance tuning - we offer comprehensive eCommerce website development services."
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
                <h3>Industry-specific Business Solutions (ERP)</h3>
                <p>
                  {isExpanded ? (
                    // Full content when expanded
                    <>
                      Our in-depth expertise is a one-step solution to analyze, design, and implement ERP solutions catered to specific client needs. We strive to streamline our clients' business operations with minimum hassle and maximum security, allowing your business to be cloud-based on a single user-friendly dashboard. From healthcare to retail, education to entertainment - our business solutions are equipped to overcome various industry-specific challenges and stand out from the crowd.

                    </>
                  ) : (
                    // Short content when collapsed
                    "Our in-depth expertise is a one-step solution to analyze, design, and implement ERP solutions catered to specific client needs. We strive to streamline our clients' business operations with minimum hassle and maximum security..."
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
                <h3 className="text-capitalize text-uppercase">
                Mobile App Development
                </h3>
                <p>
                  {isExpanded ? (
                    // Full content when expanded
                    <>
                     By developing mobile applications, Sinnox provides your organization, employees, clients and business partners with a convenient toolset to stay connected, have business data and processes at their fingertips and be productive regardless of their devices, time zone, and physical location.
                    </>
                  ) : (
                    // Short content when collapsed
                    "By developing mobile applications, Sinnox provides your organization, employees, clients and business partners with a convenient toolset to stay connected, have business data and processes at their fingertips and be productive regardless of their devices, time zone, and physical location."
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
                  Enterprise Software Development
                </h3>
                <p>
                  {isExpanded ? (
                    // Full content when expanded
                    <>
                      Sinnox team of enterprise software developers helps you design and implement custom apps that streamline versatile organizational and client-centric workflows. We create solutions from scratch or tune the up and running systems to smoothly embed them into your IT landscape.
                    </>
                  ) : (
                    // Short content when collapsed
                    "Sinnox team of enterprise software developers helps you design and implement custom apps that streamline versatile organizational and client-centric workflows. We create solutions from scratch or tune the up and running systems to smoothly embed them into your IT landscape."
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
                  {isExpanded ? (
                    // Full content when expanded
                    <>
                      Our agency offers a full suite of IT solutions tailored to
                      meet modern business needs. From custom software
                      development and cybersecurity to cloud integration and IT
                      consulting, we provide innovative services designed to
                      drive efficiency, security, and growth. Let us help
                      transform your technology landscape and propel your
                      business forward.
                    </>
                  ) : (
                    // Short content when collapsed
                    " Our agency offers a full suite of IT solutions tailored to meet modern business needs. From custom software  development and cybersecurity to cloud integration and IT consulting, we provide innovative services designed to drive efficiency, security, and growth."
                  )}
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
