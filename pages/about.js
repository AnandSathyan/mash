import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import TeamStyleTwo from "../components/Common/TeamStyleTwo";
import FeedbackStyleOne from "../components/Common/FeedbackStyleOne";
import Footer from "../components/Layout/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        bgImage="/images/page-title/page-title-bg.jpg"
      />

      <AboutContent />

      {/* <TeamStyleTwo /> */}

      <div className="pb-100">
        {/* <FeedbackStyleOne /> */}
      </div>

      <Footer />
    </>
  );
}
