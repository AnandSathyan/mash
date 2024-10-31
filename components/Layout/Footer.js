import React, { Component } from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-section pt-100 pb-70">
        <div className="container">
          <div className="subscribe-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="subscribe-content">
                  <h2>Join Our Newsletter</h2>
                  <p>
                    News letter dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                  <button type="submit">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>About Us</h3>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>

                <ul className="footer-social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="flaticon-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Important Links</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Featured Service</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/services/details">IT Management</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Development</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/services/details">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Support Engineer</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Contact</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-phone-call"></i>
                  <h3>Phone</h3>
                  <span>+965 23926969 </span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>info@sinnoxkw.com</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-pin"></i>
                  <h3>Address</h3>
                  <span>Olive Building, 1st Floor, Office No 14
Fahaheel 64026 , Kuwait, P.O.Box : 47502
</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>

      {/* Copyright area */}
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright &copy;{currentYear} Luzon. All Rights Reserved by{" "}
                  <a href="https://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
