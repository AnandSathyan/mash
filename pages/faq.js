import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FaqsContent from "../components/Faqs/FaqsContent";
import DigitalExperience from "../components/Common/DigitalExperience";
import Footer from "../components/Layout/Footer";

export default function Faq() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="FAQ"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
        bgImage="/images/page-title/page-title-bg-2.jpg"
      />

      <div className="ptb-100">
        <FaqsContent />
      </div>

      <div className="pb-100">
        <DigitalExperience />
      </div>

      <Footer />
    </>
  );
}
