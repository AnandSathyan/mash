import React from "react";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import SigninForm from "../components/Auth/SigninForm";

export default function Signin() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Signin"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Signin"
        bgImage="/images/page-title/page-title-bg-4.jpg"
      />

      <SigninForm />

      <Footer />
    </>
  );
}
