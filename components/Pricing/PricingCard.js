import React from "react";
import Link from "next/link";
import Image from "next/image";

const PricingCard = () => {
  return (
    <>
      <section className="pricing-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>
              Our <span>Pricing</span> Plan
            </h2>
            <p>
            We offer flexible pricing plans designed to meet diverse needs and budgets. Whether you're a startup or an established business, our packages provide transparent and competitive rates to ensure you get the best value for your investment. Each plan includes dedicated support, tailored services, and scalable solutions to fit your specific requirements. Choose the plan that best aligns with your goals, and let’s get started on your path to success.
            </p>
            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing">
                <div className="pricing-header">
                  <h3>Basic</h3>
                  <p>Business Up</p>
                </div>

                <div className="price">
                  <sup className="">KWD</sup>20<sub>/mo</sub>
                </div>

                <ul className="pricing-list">
                  <li>
                    <i className="flaticon-checked"></i>
                    10 GB Hosting
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>2 Unique Users
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    12 GB Capacity
                  </li>
                  <li>
                    <i className="flaticon-cancel"></i>
                    Anywhere Access
                  </li>
                  <li>
                    <i className="flaticon-cancel"></i>
                    Weekly Backup
                  </li>
                  <li>
                    <i className="flaticon-cancel"></i>
                    Support 24/Hour
                  </li>
                </ul>

                <div className="price-btn">
                  <Link href="/contact" className="default-btn">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing">
                <div className="pricing-header">
                  <h3>Standard</h3>
                  <p>Business Up</p>
                </div>

                <div className="price">
                  <sup>KWD</sup>50<sub>/mo</sub>
                </div>

                <ul className="pricing-list">
                  <li>
                    <i className="flaticon-checked"></i>
                    Visitor Info
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Quick Responses
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    12 GB Capacity
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Anywhere Access
                  </li>
                  <li>
                    <i className="flaticon-cancel"></i>
                    Weekly Backup
                  </li>
                  <li>
                    <i className="flaticon-cancel"></i>
                    Support 24/Hour
                  </li>
                </ul>

                <div className="price-btn">
                  <Link href="/contact" className="default-btn">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-pricing">
                <div className="pricing-header">
                  <h3>Premium</h3>
                  <p>Business Up</p>
                </div>

                <div className="price">
                  <sup>KWD</sup>100<sub>/mo</sub>
                </div>

                <ul className="pricing-list">
                  <li>
                    <i className="flaticon-checked"></i>
                    10 GB Hosting
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>2 Unique Users
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    12 GB Capacity
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Anywhere Access
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Weekly Backup
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Support 24/Hour
                  </li>
                </ul>

                <div className="price-btn">
                  <Link href="/contact" className="default-btn">
                    Buy Now
                  </Link>
                </div>
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

export default PricingCard;
