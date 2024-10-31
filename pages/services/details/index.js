import Navbar from "../../../components/Layout/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";
import Footer from "../../../components/Layout/Footer";

export default function ServiceDetails() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImage="/images/page-title/page-title-bg.jpg"
      />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
