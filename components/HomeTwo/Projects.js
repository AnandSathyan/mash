import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <section className="projects-section pt-100">
        <div className="container-fluid mw-1920">
          <div className="section-title">
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-projects two">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project8.jpg"
                    alt="image"
                    width={485}
                    height={380}
                  />
                </div>

                <div className="projects-content">
                  <Link href="/projects/details">
                    <h3>App Update & Rebrand</h3>
                  </Link>

                  <Link href="/projects/details">
                    <span>Research and startup</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-projects two">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project9.jpg"
                    alt="image"
                    width={485}
                    height={380}
                  />
                </div>

                <div className="projects-content">
                  <Link href="/projects/details">
                    <h3>IT Consultancy</h3>
                  </Link>

                  <Link href="/projects/details">
                    <span>Research and startup</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-projects two">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project10.jpg"
                    alt="image"
                    width={485}
                    height={380}
                  />
                </div>

                <div className="projects-content">
                  <Link href="/projects/details">
                    <h3>Digital Marketing</h3>
                  </Link>

                  <Link href="/projects/details">
                    <span>Research and startup</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-projects two">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project11.jpg"
                    alt="image"
                    width={485}
                    height={380}
                  />
                </div>

                <div className="projects-content">
                  <Link href="/projects/details">
                    <h3>App Development</h3>
                  </Link>

                  <Link href="/projects/details">
                    <span>Research and startup</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-projects two">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project12.jpg"
                    alt="image"
                    width={485}
                    height={380}
                  />
                </div>

                <div className="projects-content">
                  <Link href="/projects/details">
                    <h3>IT Solutions</h3>
                  </Link>

                  <Link href="/projects/details">
                    <span>Research and startup</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-projects two">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project13.jpg"
                    alt="image"
                    width={485}
                    height={380}
                  />
                </div>

                <div className="projects-content">
                  <Link href="/projects/details">
                    <h3>Data Management</h3>
                  </Link>

                  <Link href="/projects/details">
                    <span>Research and startup</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-projects two">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project14.jpg"
                    alt="image"
                    width={485}
                    height={380}
                  />
                </div>

                <div className="projects-content">
                  <Link href="/projects/details">
                    <h3>E-commerce Development</h3>
                  </Link>

                  <Link href="/projects/details">
                    <span>Research and startup</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-projects two">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project15.jpg"
                    alt="image"
                    width={485}
                    height={380}
                  />
                </div>

                <div className="projects-content">
                  <Link href="/projects/details">
                    <h3>Creative Web Develop</h3>
                  </Link>

                  <Link href="/projects/details">
                    <span>Research and startup</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
