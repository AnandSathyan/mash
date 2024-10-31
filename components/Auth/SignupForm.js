import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignupForm = () => {
  return (
    <>
      <div className="signup-section ptb-100">
        <div className="container">
          <div className="signup-form">
            <h3>Create your Account</h3>

            <form>
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                </div>

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

                <div className="col-5">
                  <div className="send-btn">
                    <div className="send-btn">
                      <button type="submit" className="btn default-btn">
                        Signup
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-7">
                  <span>
                    Already a registered user?{" "}
                    <Link href="/signin">Signin!</Link>
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

export default SignupForm;
