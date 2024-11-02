import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const ServiceDetailsContent = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-video">
            <div className="details-image">
              <Image
                src="/images/service-details/services-details1.jpg"
                alt="image"
                width={1920}
                height={1000}
              />
              <div className="details-video">
                <div onClick={() => setToggler(!toggler)} className="video-btn">
                  <i className="bx bx-play"></i>
                </div>
              </div>
            </div>

            <div className="text">
              <h3>We Provide Useful Services</h3>
              <p>
              Our goal is to provide services that genuinely add value and make a meaningful impact in our clients' lives. Whether through innovative technology solutions, personalized support, or strategic guidance, we are dedicated to offering services that help our clients thrive. Each service we provide is designed to address specific needs and challenges, delivering results that exceed expectations. Our commitment to reliability, efficiency, and quality ensures that you receive exceptional service every time.
              </p>
            </div>
          </div>

          <div className="services-details-overview bor-tb">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3>Exceptional Best Products</h3>
                  <p>
                  Our products are crafted with precision, quality, and usability in mind. We understand that excellence requires attention to detail and a deep understanding of our customers' needs. By combining advanced technology with user-centered design, we offer products that stand out in the market. Each product goes through rigorous testing and quality checks to ensure it meets the highest standards, providing you with reliable and effective solutions you can trust.
                  </p>

                  <div className="features-text">
                    <h4>Core Development</h4>
                    <p>
                    Innovation drives everything we do. At the core of our development process is a commitment to creating solutions that are not only functional but also aligned with the latest industry standards. We invest in research, design, and technology to build products that are both powerful and user-friendly. Our focus is on delivering high-performance solutions that adapt to evolving customer needs, ensuring that our products remain relevant and valuable over time.
                    </p>
                  </div>

                  <div className="features-text">
                    <h4>Define Your Choices</h4>
                    <p>
                    We empower you to make informed choices by providing transparent and detailed information about our products and services. We believe that when you have a clear understanding of what each option offers, you’re able to select the solution that best fits your needs. Our team is dedicated to guiding you through each choice, answering any questions, and ensuring you have all the resources needed to make decisions with confidence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-image">
                  <Image
                    src="/images/service-details/services-details2.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="services-details-overview bor-tb">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-image">
                  <Image
                    src="/images/service-details/services-details3.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3>We Provide Useful Services</h3>
                  <p>
                  Our services are designed to deliver practical solutions that meet the diverse needs of our clients. We specialize in [specific services, e.g., digital marketing, web development, consulting] to empower businesses to thrive in a competitive landscape. Our team of experts is committed to understanding your unique challenges and providing tailored solutions that enhance productivity, drive engagement, and facilitate growth. With a focus on quality and customer satisfaction, we ensure that our services not only meet but exceed your expectations.
                  </p>

                  <div className="features-text">
                    <h4>Core Development</h4>
                    <p>
                    Core development is at the heart of what we do, focusing on creating robust and scalable solutions that are both innovative and reliable. Our development process emphasizes collaboration, ensuring that we align our solutions with your business objectives. Utilizing the latest technologies and best practices, we strive to build products that are not only effective but also user-friendly. Our commitment to excellence drives us to refine our development processes continually, delivering products that stand the test of time.
                    </p>
                  </div>

                  <div className="features-text">
                    <h4>Define Your Choices</h4>
                    <p>
                    We believe in empowering our clients with the information and support they need to make informed decisions. Our approach is rooted in transparency, providing clear insights into our products and services so you can choose what best aligns with your goals. Our knowledgeable team is always ready to guide you through the options available, ensuring that you understand the benefits and features of each choice. With our support, you can confidently navigate your options and select the solutions that best meet your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
