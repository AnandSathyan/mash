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
                  <h3>Why Partner with SinnoxWhy Partner with Sinnox</h3>
                  <div className="bar"></div>
                  <p>
                  We offer a diverse range of solutions crafted to address today’s digital challenges and maximize your business's potential. From innovative advertising methods to in-depth market research, our expertise covers everything you need to thrive in a competitive landscape.
                  </p>
                </div>

                <div className="solutions-details">
                  <div className="icon">
                    <i className="flaticon-blog"></i>
                  </div>
                  <h3>Programmatic Advertising</h3>
                  <p>
                  Utilize data-driven, automated advertising to reach targeted audiences effectively and boost your campaign’s efficiency.
                  </p>
                </div>

                <div className="solutions-details">
                  <div className="icon bg-d3fbf9">
                    <i className="flaticon-software"></i>
                  </div>
                  <h3>Strategy & Research</h3>
                  <p>
                  Make informed business decisions with thorough research and a well-planned strategy tailored to your goals and market.
                  </p>
                </div>

                <div className="solutions-details">
                  <div className="icon bg-fce8c9">
                    <i className="flaticon-analysis"></i>
                  </div>
                  <h3>Design & Development</h3>
                  <p>
                  Bring your ideas to life with our creative design and robust development services, delivering user-friendly and visually appealing solutions.
                  </p>
                </div>

                <div className="solutions-details">
                  <div className="icon bg-d5e6fe">
                    <i className="flaticon-laptop"></i>
                  </div>
                  <h3>Branding & Marketing</h3>
                  <p>
                  Build a strong, memorable brand presence with comprehensive marketing strategies that resonate with your audience and drive engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div 
                className="solutions-image"
                style={{
                  backgroundImage: `url(/images/solutions.png)`
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
