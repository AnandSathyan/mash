import Navbar from "../../../components/Layout/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ProjectsStyleTwo from "../../../components/Projects/ProjectsStyleTwo";
import Footer from "../../../components/Layout/Footer";

export default function Projects2() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Projects Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects Style Two"
        bgImage="/images/page-title/page-title-bg-3.jpg"
      />

      <ProjectsStyleTwo />

      <Footer />
    </>
  );
}
