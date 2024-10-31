import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsStyleOne = () => {
  return (
    <>
      <section className="projects-section pt-100 pb-70">
        <div className="container-fluid mw-1920">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-projects">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project1.jpg"
                    alt="image"
                    width={600}
                    height={500}
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

            <div className="col-lg-4 col-md-6">
              <div className="single-projects">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project2.jpg"
                    alt="image"
                    width={600}
                    height={500}
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

            <div className="col-lg-4">
              <div className="single-projects">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project3.jpg"
                    alt="image"
                    width={600}
                    height={500}
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

            <div className="col-lg-4">
              <div className="single-projects">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project4.jpg"
                    alt="image"
                    width={525}
                    height={765}
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

            <div className="col-lg-4 col-md-6">
              <div className="single-projects">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project5.jpg"
                    alt="image"
                    width={525}
                    height={375}
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

              <div className="single-projects">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project6.jpg"
                    alt="image"
                    width={525}
                    height={365}
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

            <div className="col-lg-4 col-md-6">
              <div className="single-projects">
                <div className="projects-image">
                  <Image
                    src="/images/projects/project7.jpg"
                    alt="image"
                    width={525}
                    height={765}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsStyleOne;
