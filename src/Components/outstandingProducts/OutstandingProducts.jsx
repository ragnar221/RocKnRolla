import React from "react";
import { BannerTitle, BannerWrapper, Divisor } from "./OutstandingProductsStyle";

const OutstandingProducts = () => {
  return (
    <BannerWrapper>
      <Divisor></Divisor> <BannerTitle>Nuestros productos</BannerTitle>
      <Divisor></Divisor>
    </BannerWrapper>
  );
};

export default OutstandingProducts;