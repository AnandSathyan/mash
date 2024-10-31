import Navbar from "../../../components/Layout/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layout/Footer";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";

export default function BlogDetails() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImage="/images/page-title/page-title-bg-2.jpg"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}
