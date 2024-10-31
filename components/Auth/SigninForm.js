import React from "react";
import Link from "next/link";
import Image from "next/image";

const SigninForm = () => {
  return (
    <>
      <div className="login-section ptb-100">
        <div className="container">
          <div className="login-form">
            <div className="login-title">
              <h3>Welcome Back!</h3>
              <p>Please login to your account.</p>
            </div>

            <form>
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Keep me Sign In
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <p className="forgot-password">
                      <Link href="#">Forgot Password?</Link>
                    </p>
                  </div>
                </div>

                <div className="col-5">
                  <div className="send-btn">
                    <button type="submit" className="btn default-btn">
                      Signin
                    </button>
                  </div>
                </div>

                <div className="col-7 pl-0">
                  <span>
                    Don't have account? <Link href="/signup">Signup!</Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-shape">
          <div className="shape-1">
            <Image
              src="/images/shape/shape4.png"
              alt="image"
              width={15}
              height={15}
            />
          </div>
          <div className="shape-2 rotateme">
            <Image
              src="/images/shape/shape5.svg"
              alt="image"
              width={22}
              height={22}
            />
          </div>
          <div className="shape-3">
            <Image
              src="/images/shape/shape6.svg"
              alt="image"
              width={21}
              height={20}
            />
          </div>
          <div className="shape-4">
            <Image
              src="/images/shape/shape7.png"
              alt="image"
              width={18}
              height={18}
            />
          </div>
          <div className="shape-5">
            <Image
              src="/images/shape/shape8.png"
              alt="image"
              width={12}
              height={11}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninForm;
