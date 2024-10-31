import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PricingCard from "../components/Pricing/PricingCard";
import DigitalExperience from "../components/Common/DigitalExperience";
import Footer from "../components/Layout/Footer";

export default function Pricing() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
        bgImage="/images/page-title/page-title-bg-3.jpg"
      />

      <PricingCard />

      <div className="ptb-100">
        <DigitalExperience />
      </div>

      <Footer />
    </>
  );
}
