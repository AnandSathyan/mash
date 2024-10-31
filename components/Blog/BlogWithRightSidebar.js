import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";

const BlogWithRightSidebar = () => {
  return (
    <>
      <div className="blog-section ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 col-md-6">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor
                      </p>

                      <Link href="/blog/details" className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor
                      </p>

                      <Link href="/blog/details" className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor
                      </p>

                      <Link href="/blog/details" className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="image">
                      <Link href="/blog/details">
                        <Image
                          src="/images/blog/blog4.jpg"
                          alt="image"
                          width={510}
                          height={400}
                        />
                      </Link>
                    </div>

                    <div className="content">
                      <span>23 April 2024</span>
                      <h3>
                        <Link href="/blog/details">
                          Startup Marketing Solution For Business Owner
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor
                      </p>

                      <Link href="/blog/details" className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="image">
                      <Link href="/blog/details">
                        <Image
                          src="/images/blog/blog5.jpg"
                          alt="image"
                          width={510}
                          height={400}
                        />
                      </Link>
                    </div>

                    <div className="content">
                      <span>24 April 2024</span>
                      <h3>
                        <Link href="/blog/details">
                          Web Development Best Work In Future World
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor
                      </p>

                      <Link href="/blog/details" className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="image">
                      <Link href="/blog/details">
                        <Image
                          src="/images/blog/blog6.jpg"
                          alt="image"
                          width={510}
                          height={400}
                        />
                      </Link>
                    </div>

                    <div className="content">
                      <span>24 April 2024</span>
                      <h3>
                        <Link href="/blog/details">
                          Instagram Feed Add To Your WordPress Site
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor
                      </p>

                      <Link href="/blog/details" className="read-more">
                        Read More
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

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWithRightSidebar;
