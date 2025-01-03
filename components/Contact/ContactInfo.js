import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-box pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="flaticon-pin"></i>
                <div className="content-title">
                  <h3>Address</h3>
                  <p>
                  Olive Building, 1st Floor, Office No 14

 <br />Fahaheel 64026 , Kuwait, P.O.Box : 47502
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="flaticon-envelope"></i>
                <div className="content-title">
                  <h3>Email</h3>
                  <p>info@sinnoxkw.com </p>
                  <p> +965 23929696</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-contact-box">
                <i className="flaticon-phone-call"></i>
                <div className="content-title">
                  <h3>Phone</h3>
                  <p> +965 23929696</p>
                  <p> +965 23926969</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
