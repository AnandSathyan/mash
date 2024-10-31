import Navbar from "../../../components/Layout/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layout/Footer";
import BlogWithRightSidebar from "../../../components/Blog/BlogWithRightSidebar";

export default function Blog2() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Right Sidebar"
        bgImage="/images/page-title/page-title-bg-4.jpg"
      />

      <BlogWithRightSidebar />

      <Footer />
    </>
  );
}
