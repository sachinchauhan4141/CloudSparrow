import React from "react";
import BannerFooter from "./BannerFooter";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import Work from "./Work";
import Testimonials from "./Testimonials";
import EightPage from "./EightPage";
import ProductCycle from "./ProductCycle";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <BannerFooter />
      <HeroSection />
      <WhatWeDo />
      <Work />
      <Testimonials />
      <EightPage />
      <ProductCycle />
    </div>
  );
};

export default HomePage;
