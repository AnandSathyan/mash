import NavbarStyleTwo from "../components/Layout/NavbarStyleTwo";
import Banner from "../components/HomeSix/Banner";
import Features from "../components/HomeSix/Features";
import AboutUs from "../components/HomeSix/AboutUs";
import DigitalMarketing from "../components/HomeSix/DigitalMarketing";
import Services from "../components/HomeSix/Services";
import Experience from "../components/HomeSix/Experience";
import Projects from "../components/HomeSix/Projects";
import TeamStyleOne from "../components/Common/TeamStyleOne";
import SkillsArea from "../components/HomeSix/SkillsArea";
import ContactForm from "../components/Contact/ContactForm";
import FeedbackStyleTwo from "../components/Common/FeedbackStyleTwo";
import BlogPost from "../components/Common/BlogPost";
import Footer from "../components/Layout/Footer";

export default function Home6() {
  return (
    <>
      <NavbarStyleTwo />

      <Banner />

      <Features />

      <AboutUs />

      <DigitalMarketing />

      <Services />

      <Projects />

      <Experience />

      <TeamStyleOne />

      <SkillsArea />

      <div className="ptb-100">
        <ContactForm />
      </div>

      <FeedbackStyleTwo />

      <BlogPost />

      <Footer />
    </>
  );
}
