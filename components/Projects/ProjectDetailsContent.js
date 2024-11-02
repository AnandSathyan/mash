import React from "react";
import Image from "next/image";

const ProjectDetailsContent = () => {
  return (
    <>
      <section className="project-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <Image
                  src="/images/service-details/services-details2.jpg"
                  alt="projects"
                  width={800}
                  height={800}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="project-details-image">
                <Image
                  src="/images/service-details/services-details3.jpg"
                  alt="projects"
                  width={800}
                  height={800}
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="projects-details-desc">
                <h3>Competitor Analysis</h3>

                <p>
                Competitor Analysis is essential for understanding the landscape in which we operate. By examining our competitors' strengths, weaknesses, and unique strategies, we gain valuable insights that allow us to refine our own approach and stay ahead in the market. This analysis helps us identify gaps and opportunities, ensuring that we continually enhance our offerings to meet and exceed customer expectations. With a clear view of the competition, we’re able to make strategic decisions that drive growth and reinforce our commitment to delivering unmatched value.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Core Development
                  </h4>
                  <p>
                  We believe in creating genuine, high-quality products and services that prioritize customer needs. At the heart of our development process is a commitment to understanding and addressing the real challenges our customers face. Each product we create is inspired by the people who use it, crafted with the goal of enhancing their lives and meeting their unique requirements. Our focus on quality and innovation drives us to continually improve, delivering solutions that truly make a difference.{" "}
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Define Your Choices
                  </h4>
                  <p>
                  Our goal is to empower customers to make informed decisions that best meet their needs. We provide clear, honest information about our products and services, ensuring that every option we offer aligns with our commitment to integrity and quality. By focusing on transparency and reliability, we aim to build trust with our customers, making it easier for them to choose solutions that truly enhance their experience and deliver value.
                  </p>
                </div>

                <p>
                Our approach is rooted in a deep understanding of customer needs, combined with a commitment to innovation and continuous improvement. We leverage the latest technologies and industry best practices to develop solutions that not only meet but exceed expectations. Every decision we make—from product design to customer support—is centered on providing an exceptional experience. By staying agile and responsive, we ensure that we can adapt to changing market dynamics and always deliver the best possible outcomes for our clients.
                </p>

                <div className="project-details-info">
                  <div className="single-info-box">
                    <h4>Client</h4>
                    <span>James Anderson</span>
                  </div>

                  <div className="single-info-box">
                    <h4>Category</h4>
                    <span>Network, Marketing</span>
                  </div>

                  <div className="single-info-box">
                    <h4>Date</h4>
                    <span>February 28, 2024</span>
                  </div>

                  <div className="single-info-box">
                    <h4>Share</h4>
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
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="single-info-box">
                    <a className="default-btn" target="_blank">
                      Live Preview
                    </a>
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

export default ProjectDetailsContent;
