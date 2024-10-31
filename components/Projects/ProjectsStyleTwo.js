import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsStyleTwo = () => {
  return (
    <>
      <section className="protfolio-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>
              Our <span>Impressive</span> Portfolio
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/portfolio/portfolio1.png"
                      alt="image"
                      width={440}
                      height={375}
                    />
                  </Link>
                </div>

                <div className="content">
                  <Link href="/projects/details">
                    <h3>Creative Web Develop</h3>
                    <span>Web Design</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/portfolio/portfolio2.png"
                      alt="image"
                      width={440}
                      height={375}
                    />
                  </Link>
                </div>

                <div className="content">
                  <Link href="/projects/details">
                    <h3>Digital Services</h3>
                    <span>App Development</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/portfolio/portfolio3.png"
                      alt="image"
                      width={440}
                      height={375}
                    />
                  </Link>
                </div>

                <div className="content">
                  <Link href="/projects/details">
                    <h3>Complex Design</h3>
                    <span>Software Development</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/portfolio/portfolio4.png"
                      alt="image"
                      width={440}
                      height={375}
                    />
                  </Link>
                </div>

                <div className="content">
                  <Link href="/projects/details">
                    <h3>Creative Web Develop</h3>
                    <span>React Development</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/portfolio/portfolio5.png"
                      alt="image"
                      width={440}
                      height={375}
                    />
                  </Link>
                </div>

                <div className="content">
                  <Link href="/projects/details">
                    <h3>Digital Services</h3>
                    <span>E-commerce Development</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/portfolio/portfolio6.png"
                      alt="image"
                      width={440}
                      height={375}
                    />
                  </Link>
                </div>

                <div className="content">
                  <Link href="/projects/details">
                    <h3>Complex Design</h3>
                    <span>Software Engineering</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <Link href="#" className="prev page-numbers">
                  <i className="flaticon-left"></i>
                </Link>

                <Link href="#" className="page-numbers">
                  1
                </Link>

                <span className="page-numbers current" aria-current="page">
                  2
                </span>

                <Link href="#" className="page-numbers">
                  3
                </Link>

                <Link href="#" className="page-numbers">
                  4
                </Link>

                <Link href="#" className="next page-numbers">
                  <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsStyleTwo;
