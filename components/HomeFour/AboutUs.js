import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
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
                <h2>About Our Luzon Agency</h2>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                      <span>Friendly Support</span>
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

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan facilisis.
                      </p>

                      <Link href="/about" className="default-btn">
                        Discover More
                      </Link>
                    </div>

                    {/* Tabs item */}
                    <div id="tab2" className="tabs_item">
                      <div className="text">
                        <h3>
                          How to generate your Creative Idea With IT Business
                        </h3>
                      </div>

                      <ul className="list">
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
                    <div id="tab3" className="tabs_item">
                      <div className="text">
                        <h3>
                          How to generate your Creative Idea With IT Business
                        </h3>
                      </div>

                      <ul className="list">
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

export default AboutUs;
