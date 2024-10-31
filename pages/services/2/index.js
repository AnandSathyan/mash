import Navbar from "../../../components/Layout/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesStyleTwo from "../../../components/Services/ServicesStyleTwo";
import Footer from "../../../components/Layout/Footer";

export default function Services2() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Two"
        bgImage="/images/page-title/page-title-bg-3.jpg"
      />

      <ServicesStyleTwo />

      <Footer />
    </>
  );
}
