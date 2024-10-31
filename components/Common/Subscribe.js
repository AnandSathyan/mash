import React from "react";

const Subscribe = () => {
  return (
    <>
      <section 
        className="subscribe-inner-area ptb-100"
        style={{
          backgroundImage: `url(/images/subscribe-bg.jpg)`
        }}
      >
        <div className="container">
          <div className="subscribe-inner-text">
            <h2>
              Get Better Solution For Your Business & Get Update Newsletter
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                className="input-newsletter"
                placeholder="Enter your email"
                name="email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
