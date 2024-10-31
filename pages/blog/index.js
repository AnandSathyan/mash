import Navbar from "../../components/Layout/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layout/Footer";
import BlogGrid from "../../components/Blog/BlogGrid";

export default function Blog() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        bgImage="/images/page-title/page-title-bg-3.jpg"
      />

      <BlogGrid />

      <Footer />
    </>
  );
}
