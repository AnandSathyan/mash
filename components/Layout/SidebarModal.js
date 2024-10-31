import React from "react";
import SidebarContactForm from "./SidebarContactForm";

const SidebarModal = ({ active, onClick }) => {
  const closeModal = () => {
    onClick(false);
  };

  return (
    <>
      <div className={`sidebar-modal ${active}`}>
        <div className="sidebar-modal-inner">
          <div className="sidebar-about-area">
            <div className="title">
              <h2>About Us</h2>
              <p>
                We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services. The
                customer is king, their lives and needs are the inspiration.
              </p>
            </div>
          </div>

          <div className="sidebar-contact-feed">
            <h2>Contact</h2>

            {/* Sidebar Contact Form */}
            <SidebarContactForm />
          </div>

          <div className="sidebar-contact-area">
            <div className="contact-info">
              <div className="contact-info-content">
                <h2>
                  <a className="pnumber">+965 23926969 </a>
                  <span className="or">OR</span>
                  <a className="email">info@sinnoxkw.com</a>
                </h2>

                <ul className="social">
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Close Modal */}
          <span
            onClick={closeModal}
            className="close-btn sidebar-modal-close-btn"
          >
            <i className="flaticon-cancel"></i>
          </span>
        </div>

        <span onClick={closeModal} className="close-modal"></span>
      </div>
    </>
  );
};

export default SidebarModal;
