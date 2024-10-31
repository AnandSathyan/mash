import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import SignupForm from "../components/Auth/SignupForm";

export default function Signup() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Signup"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Signup"
        bgImage="/images/page-title/page-title-bg.jpg"
      />

      <SignupForm />

      <Footer />
    </>
  );
}
