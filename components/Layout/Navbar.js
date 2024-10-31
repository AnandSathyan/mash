import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SidebarModal from "./SidebarModal";
import SearchModal from "./SearchModal";
import Image from "next/image";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Sidebar Modal
  const [sidebarModal, setSidebarModal] = useState(false);
  const toggleModal = () => {
    setSidebarModal(!sidebarModal);
  };

  // Search Modal
  const [searchModal, setSearchModal] = useState(false);
  const toggleSearchModal = () => {
    setSearchModal(!searchModal);
  };

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top bg-white">
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={130}
                height={43}
              />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link
                        href="/index3/"
                        className={`nav-link ${
                          currentPath == "/index3/" && "active"
                        }`}
                      >
                    Home 
                    {/* <i className="bx bx-chevron-down"></i> */}
                  </Link>

                  {/* <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${currentPath == "/" && "active"}`}
                      >
                        Home One
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index2/"
                        className={`nav-link ${
                          currentPath == "/index2/" && "active"
                        }`}
                      >
                        Home Two
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index3/"
                        className={`nav-link ${
                          currentPath == "/index3/" && "active"
                        }`}
                      >
                        Home Three
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index4/"
                        className={`nav-link ${
                          currentPath == "/index4/" && "active"
                        }`}
                      >
                        Home Four
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index5/"
                        className={`nav-link ${
                          currentPath == "/index5/" && "active"
                        }`}
                      >
                        Home Five
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index6/"
                        className={`nav-link ${
                          currentPath == "/index6/" && "active"
                        }`}
                      >
                        Home Six
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index7/"
                        className={`nav-link ${
                          currentPath == "/index7/" && "active"
                        }`}
                      >
                        Home Seven
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index8/"
                        className={`nav-link ${
                          currentPath == "/index8/" && "active"
                        }`}
                      >
                        Home Eight
                      </Link>
                    </li>
                  </ul> */}
                </li>

                <li className="nav-item">
                  <Link
                    href="/about/"
                    className={`nav-link ${
                      currentPath == "/about/" && "active"
                    }`}
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Services <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        Services Style One
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <Link
                        href="/services/2/"
                        className={`nav-link ${
                          currentPath == "/services/2/" && "active"
                        }`}
                      >
                        Services Style Two
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/details/"
                        className={`nav-link ${
                          currentPath == "/services/details/" && "active"
                        }`}
                      >
                        Service Details
                      </Link>
                    </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Portfolio <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/projects/"
                        className={`nav-link ${
                          currentPath == "/projects/" && "active"
                        }`}
                      >
                        Portfolio Style One
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/projects/2/"
                        className={`nav-link ${
                          currentPath == "/projects/2/" && "active"
                        }`}
                      >
                        Portfolio Style Two
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/projects/details/"
                        className={`nav-link ${
                          currentPath == "/projects/details/" && "active"
                        }`}
                      >
                        Portfolio Details
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Pages <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/team/"
                        className={`nav-link ${
                          currentPath == "/team/" && "active"
                        }`}
                      >
                        Team
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/pricing/"
                        className={`nav-link ${
                          currentPath == "/pricing/" && "active"
                        }`}
                      >
                        Pricing
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/faq/"
                        className={`nav-link ${
                          currentPath == "/faq/" && "active"
                        }`}
                      >
                        FAQ
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        User <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/signin/"
                            className={`nav-link ${
                              currentPath == "/signin/" && "active"
                            }`}
                          >
                            Sign In
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/signup/"
                            className={`nav-link ${
                              currentPath == "/signup/" && "active"
                            }`}
                          >
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/404/"
                        className={`nav-link ${
                          currentPath == "/404/" && "active"
                        }`}
                      >
                        404 Error Page
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/coming-soon/"
                        className={`nav-link ${
                          currentPath == "/coming-soon//" && "active"
                        }`}
                      >
                        Coming Soon
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/terms-conditions/"
                        className={`nav-link ${
                          currentPath == "/terms-conditions/" && "active"
                        }`}
                      >
                        Terms & Conditions
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/privacy-policy/"
                        className={`nav-link ${
                          currentPath == "/privacy-policy/" && "active"
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </li> */}

                {/* <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Blog <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/blog/"
                        className={`nav-link ${
                          currentPath == "/blog/" && "active"
                        }`}
                      >
                        Blog Grid
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog/2/"
                        className={`nav-link ${
                          currentPath == "/blog/2/" && "active"
                        }`}
                      >
                        Blog Right Sidebar
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog/details/"
                        className={`nav-link ${
                          currentPath == "/blog/details/" && "active"
                        }`}
                      >
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li> */}

                <li className="nav-item">
                  <Link
                    href="/contact/"
                    className={`nav-link ${
                      currentPath == "/contact/" && "active"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-options">
              <div className="option-item">
                <i
                  className="search-btn flaticon-search"
                  onClick={toggleSearchModal}
                ></i>
              </div>

              <div className="burger-menu" onClick={toggleModal}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Right Sidebar Modal */}
      <SidebarModal
        onClick={toggleModal}
        active={sidebarModal ? "active" : ""}
      />

      {/* Right Search Modal */}
      <SearchModal
        onClick={toggleSearchModal}
        active={searchModal ? "active" : ""}
      />
    </>
  );
};

export default Navbar;
