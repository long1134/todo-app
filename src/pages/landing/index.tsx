import { useEffect } from "react";
import Aos from "aos";
import Navbar from "./Navbar";
import Hero from "./Hero";
import DashboardDemos from "./DashboardDemos";
import AppsDemos from "./AppsDemos";
import Features from "./Features";
import Footer from "./Footer";
import WhatYouGet from "./WhatYouGet";

// styles
import 'aos/dist/aos.css'
import { useLayoutContext } from "@src/states";
import ElementsPreview from "./ElementsPreview";

const LandingPage = () => {
  const { themeMode, updateTheme } = useLayoutContext();

  useEffect(() => {
    Aos.init();
    // updateTheme('dark')
  }, [themeMode]);


  return (
    <>
      <Navbar />
      <Hero />
      {/* <WhatYouGet /> */}
      {/* <ElementsPreview /> */}
      <DashboardDemos />
      <AppsDemos />
      {/*
      <ExtraPagesDemos />
      <AuthDemos />
      <Features />
    */}
      <Footer />
    </>
  )
}

export default LandingPage
