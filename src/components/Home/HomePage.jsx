import React from "react";
import BannerFooter from "./BannerFooter";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import Work from "./Work";
import Testimonials from "./Testimonials";
import TechStack from "./TechStack";
import ProductCycle from "./ProductCycle";
import Banner from "./Banner";
import authService from "../../appwrite/auth";
import { toast } from "react-toastify";

const HomePage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams?.get("userId");
  const secret = urlParams?.get("secret");

  if (userId && secret) {
    authService
      .verifyEmail({ userId, secret })
      .then((response) => {
        if (response) {
          toast("Email Verified Successfully");
        }
      })
      .catch((e) => {
        toast(e?.message);
      });
  }
  return (
    <div>
      <Banner />
      <BannerFooter />
      <HeroSection />
      <WhatWeDo />
      <Work />
      <Testimonials />
      <TechStack />
      <ProductCycle />
    </div>
  );
};

export default HomePage;
