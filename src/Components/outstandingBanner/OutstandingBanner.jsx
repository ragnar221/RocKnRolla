import React from "react";
import { BannerTitle, BannerWrapper, Divisor } from "./OutstandingBannerStyle";

const OutstandingBanner = () => {
  return (
    <BannerWrapper>
      <Divisor></Divisor> <BannerTitle>¡Aprovecha estas ofertas!</BannerTitle>
      <Divisor></Divisor>
    </BannerWrapper>
  );
};

export default OutstandingBanner;