import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutContent = () => {
  // Tab
  const openTabSection = (evt, tabName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };

  return (
    <>
      <section className="about-section bor-tb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div 
                className="about-image"
                style={{
                  backgroundImage: `url(/images/about/about-2.jpg)`
                }}
              >
                <Image
                  src="/images/about/about-2.jpg"
                  alt="image"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-tab">
                <h2>About Sinnox </h2>
                <div className="bar"></div>
                <p>
                Company with a powerful team in ecommerce website design and mobile app development. Our web design company specializes in ecommerce website development, SEO services, KNET integration, and iOS app development for iPhone/iPad, as well as Android apps development. We offer comprehensive web design services in Kuwait, including mobile app development.
                </p>

                <div className="tab about-list-tab">
                  {/* Tabs Nav */}
                  <ul className="tabs">
                    <li
                      className="current"
                      onClick={(e) => openTabSection(e, "tab1")}
                    >
                      <span>Our History</span>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab2")}>
                      <span>Our Mission</span>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab3")}>
                      <span>Our Vision</span>
                    </li>
                  </ul>

                  {/* Tab content */}
                  <div className="tab_content">
                    {/* Tabs item */}
                    <div id="tab1" className="tabs_item">
                      <div className="text">
                        <h3>
                          How to generate your Creative Idea With IT Business
                        </h3>
                      </div>

                      <ul className="list">
                        <li>
                          <i className="flaticon-tick"></i>
                          The Philosophy of Business Analytics
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Fast Track Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Lies & Damn Lies About Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          The Ultimate Deal on Business
                        </li>
                      </ul>

                      {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan facilisis.
                      </p> */}

                      <Link href="/about" className="default-btn">
                        Discover More
                      </Link>
                    </div>

                    {/* Tabs item */}
                    <div id="tab2" className="tabs_item">
                      <div className="text">
                        <h3>
                        We strive to be more than just a service provider; we aim to be trusted IT solution provider.
                        <br/>
                        <br/>
                        </h3>
                       <span> We pride ourselves on delivering a value proposition that goes beyond expectations. Our approach is centered on understanding your business inside</span>

                      </div>

                      {/* <ul className="list">
                        <li>
                          <i className="flaticon-tick"></i>
                          The Philosopy of Business Analytics
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Fast Track Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Lies & Damn Lies About Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          The Ultimate Deal on Business
                        </li>
                      </ul> */}

                      {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan facilisis.
                      </p> */}

                      <Link href="/about" className="default-btn">
                        Discover More
                      </Link>
                    </div>

                    {/* Tabs item */}
                    <div id="tab3" className="tabs_item">
                      <div className="text">
                        <h3>
                        Growing with our clients to cater there demands.

                        </h3>
                        <br/>
                        <br/>

                        <span>
                        Become essential to our customers by providing differentiated products and services to help them achieve their aspirations
                        </span>
                      </div>

                      {/* <ul className="list">
                        <li>
                          <i className="flaticon-tick"></i>
                          The Philosopy of Business Analytics
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Fast Track Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Lies & Damn Lies About Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          The Ultimate Deal on Business
                        </li>
                      </ul> */}

                      {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan facilisis.
                      </p> */}

                      <Link href="/about" className="default-btn">
                        Discover More
                      </Link>
                    </div>
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

export default AboutContent;
