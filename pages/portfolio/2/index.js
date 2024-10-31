import Navbar from "../../../components/Layout/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ProjectsStyleTwo from "../../../components/Projects/ProjectsStyleTwo";
import Footer from "../../../components/Layout/Footer";

export default function Portfolio() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="portfolio"
        homePageUrl="/"
        homePageText="Home"
        activePageText="portfolio"
        bgImage="/images/page-title/page-title-bg-3.jpg"
      />

      <ProjectsStyleTwo />

      <Footer />
    </>
  );
}
