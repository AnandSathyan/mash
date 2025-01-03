import NavbarStyleTwo from "../components/Layout/NavbarStyleTwo";
import Banner from "../components/HomeThree/Banner";
import Services from "../components/HomeThree/Services";
import SmartApproach from "../components/HomeThree/SmartApproach";
import FeaturedSolutions from "../components/HomeThree/FeaturedSolutions";
import ServiceOverview from "../components/HomeThree/ServiceOverview";
import FunFactsStyleTwo from "../components/Common/FunFactsStyleTwo";
import TeamStyleTwo from "../components/Common/TeamStyleTwo";
import PricingCard from "../components/Pricing/PricingCard";
import Portfolio from "../components/HomeThree/Portfolio";
import FeedbackStyleOne from "../components/Common/FeedbackStyleOne";
import BlogPost from "../components/Common/BlogPost";
import Footer from "../components/Layout/Footer";
import MarketingSection from "../components/HomeThree/UpdatedFeaturedSoultions";

export default function Home3() {
  return (
    <>
      <NavbarStyleTwo />

      <Banner />

      <Services />

      <SmartApproach />

      <MarketingSection/>

      <FeaturedSolutions />

      <ServiceOverview />

      <FunFactsStyleTwo />

      {/* <TeamStyleTwo />   */}

      <PricingCard />

      {/* <Portfolio /> */}

      {/* <FeedbackStyleOne /> */}

      {/* <BlogPost /> */}

      <Footer />
    </>
  );
}
