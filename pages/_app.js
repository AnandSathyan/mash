import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/flaticon.css";
import "../styles/boxicons.min.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
// Global style
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const getPageTitle = () => {
    switch (router.pathname) {
      case "/":
        return "Home - Sinnox";
      case "/about":
        return "About Us - Sinnox";
      case "/services":
        return "Services - Sinnox";
      case "/portfolio":
          return "Portfolio - Sinnox";
      case "/contact":
          return "Contact - Sinnox";
      // Add more cases as needed for each route
      default:
        return "Sinnox";
    }
  };
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{getPageTitle()}</title>
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
}
