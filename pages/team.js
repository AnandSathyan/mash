import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamCard from "../components/Team/TeamCard";
import Footer from "../components/Layout/Footer";

export default function Team() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
        bgImage="/images/page-title/page-title-bg-2.jpg"
      />

      <TeamCard />

      <Footer />
    </>
  );
}
