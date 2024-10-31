import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area pl-15" id="secondary">
        <div className="widget widget_search">
          <div className="post-wrap">
            <form className="search-form">
              <label>
                <span className="screen-reader-text">Search for:</span>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search..."
                />
              </label>

              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <div className="post-wrap">
            <article className="item">
              <Link href="/blog/details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{ backgroundImage: `url(/images/blog/blog1.jpg)` }}
                ></span>
              </Link>

              <div className="info">
                <time>February 20, 2024</time>
                <h4 className="title usmall">
                  <Link href="/blog/details">
                    Making Peace With The Feast Or Famine Of Freelancing
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/blog/details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{ backgroundImage: `url(/images/blog/blog2.jpg)` }}
                ></span>
              </Link>

              <div className="info">
                <time>February 21, 2024</time>
                <h4 className="title usmall">
                  <Link href="/blog/details">
                    Be Healthy, Enjoy Life With Trifles Organic
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/blog/details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{ backgroundImage: `url(/images/blog/blog3.jpg)` }}
                ></span>
              </Link>

              <div className="info">
                <time>February 22, 2024</time>
                <h4 className="title usmall">
                  <Link href="/blog/details">
                    Buy Organic Food Online And Be Healthy
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          </div>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <div className="post-wrap">
            <ul>
              <li>
                <Link href="/blog">
                  Business <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Privacy <span>(20)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Technology <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Tips <span>(12)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Uncategorized <span>(16)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="post-wrap">
            <div className="tagcloud">
              <Link href="/blog">IT Solution (3)</Link>

              <Link href="/blog">Uncategorized (3)</Link>

              <Link href="/blog">Tips (2)</Link>

              <Link href="/blog">AI Solution (2)</Link>

              <Link href="/blog">Technology (1)</Link>

              <Link href="/blog">Privacy (1)</Link>

              <Link href="/blog">Business (1)</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
