import Navbar from "../../components/Layout/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ProjectsStyleOne from "../../components/Projects/ProjectsStyleOne";
import Footer from "../../components/Layout/Footer";

export default function Projects() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="/Portfolio/"
        homePageUrl="/"
        homePageText="Home"
        activePageText="/portfolio/"
        bgImage="/images/page-title/page-title-bg-2.jpg"
      />

      <ProjectsStyleOne />

      <Footer />
    </>
  );
}
