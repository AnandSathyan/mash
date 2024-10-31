import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layout/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImage="/images/page-title/page-title-bg.jpg"
      />

      <ContactInfo />

      <div className="pb-100">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}
