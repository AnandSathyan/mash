import Navbar from "../../../components/Layout/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ProjectDetailsContent from "../../../components/Projects/ProjectDetailsContent";
import Footer from "../../../components/Layout/Footer";

export default function Details() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Project Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Project Details"
        bgImage="/images/page-title/page-title-bg.jpg"
      />

      <ProjectDetailsContent />

      <Footer />
    </>
  );
}
