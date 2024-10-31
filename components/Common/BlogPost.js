import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  return (
    <>
      <section className="blog-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>
              Our <span>Latest</span> News
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog1.jpg"
                      alt="image"
                      width={510}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="content">
                  <span>20 April 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      Great Tips To Earn More Money From Digital Industry
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor
                  </p>

                  <Link href="/blog/details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog2.jpg"
                      alt="image"
                      width={510}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="content">
                  <span>21 April 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      The Billionaire Guide On Design That will Get You Rich
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor
                  </p>

                  <Link href="/blog/details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog3.jpg"
                      alt="image"
                      width={510}
                      height={400}
                    />
                  </Link>
                </div>

                <div className="content">
                  <span>22 April 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      Making Peace With The Feast Or Famine Of Freelancing
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor
                  </p>

                  <Link href="/blog/details" className="read-more">
                    Read More
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

export default BlogPost;
