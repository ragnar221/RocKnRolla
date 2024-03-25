import React from "react";
import { formatPrice } from "../../utils/formatPrice";

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from "./SummaryCardStyle";

const SummaryCard = ({ name, quantity, img, price }) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>cantidad: {quantity}</p>
        <ProductPriceStyled>{formatPrice(price)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default SummaryCard;