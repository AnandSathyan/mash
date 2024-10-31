import React from "react";
import Link from "next/link";
import Image from "next/image";

const SmartApproach = () => {
  return (
    <>
      <section className="audience-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="audience-image">
                <Image
                  src="/images/audience.png"
                  alt="image"
                  width={735}
                  height={735}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="audience-content">
                <h3>Engaging New Audience Through Smart Approach </h3>
                <div className="bar"></div>

                <p>
                In today’s digital world, connecting with new audiences requires more than just attention-grabbing tactics—it’s about building meaningful relationships. A smart approach combines personalized content with social media and influencer partnerships to boost relevance and credibility. By offering value-first resources like blogs and videos, brands can attract new users organically.
                </p>

                <p>
                Engaging experiences like polls and Q&As foster interaction, while data-driven insights allow continuous refinement of the strategy. This balanced, audience-focused approach helps establish trust, making your brand both memorable and impactful to new audiences.
                </p>

                <div className="audience-btn">
                  <Link href="/contact" className="default-btn">
                    Get Started
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

export default SmartApproach;
