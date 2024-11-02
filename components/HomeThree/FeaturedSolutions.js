import React from "react";
import Image from "next/image";

const FeaturedSolutions = () => {
  return (
    <>
      <section className="solutions-section bor-tb">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="solutions-content-area">
                <div className="solutions-content">
                  <h3>Why Partner with SEOC Your Path to SEO & Digital Marketing Success</h3>
                  <div className="bar"></div>
                  <p>
                  We offer a diverse range of solutions crafted to address today’s digital challenges and maximize your business's potential. From innovative advertising methods to in-depth market research, our expertise covers everything you need to thrive in a competitive landscape.
                  </p>
                </div>

                <div className="solutions-details">
                  <div className="icon">
                    <i className="flaticon-blog"></i>
                  </div>
                  <h3>Strategy Development</h3>
                  <p>
                  Based on our findings, we develop customized digital marketing strategy tailored objective.
                  </p>
                </div>

                <div className="solutions-details">
                  <div className="icon bg-d3fbf9">
                    <i className="flaticon-software"></i>
                  </div>
                  <h3>Monitoring & Optimization</h3>
                  <p>
                  We believe in the power of data-driven decision-making. Throughout the campaign,
                  </p>
                </div>

                <div className="solutions-details">
                  <div className="icon bg-fce8c9">
                    <i className="flaticon-analysis"></i>
                  </div>
                  <h3>Continuous Improvement</h3>
                  <p>
                  Digital marketing is an ever-evolving field, and we're committed to staying ahead of the curve.
                  </p>
                </div>

                {/* <div className="solutions-details">
                  <div className="icon bg-d5e6fe">
                    <i className="flaticon-laptop"></i>
                  </div>
                  <h3>Branding & Marketing</h3>
                  <p>
                  Build a strong, memorable brand presence with comprehensive marketing strategies that resonate with your audience and drive engagement.
                  </p>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div 
                className="solutions-image"
                style={{
                  backgroundImage: `url(https://sinnoxkw.com/wp-content/uploads/2024/08/work-img1.png)`
                }}
              >
                <Image
                  src="/images/solutions.png"
                  alt="image"
                  width={960}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedSolutions;
