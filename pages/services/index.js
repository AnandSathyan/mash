import Navbar from "../../components/Layout/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServicesStyleOne from "../../components/Services/ServicesStyleOne";
import Footer from "../../components/Layout/Footer";

export default function Services() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style One"
        bgImage="/images/page-title/page-title-bg-2.jpg"
      />

      <ServicesStyleOne />

      <Footer />
    </>
  );
}
