import React from "react";
import {
  AddCartButton,
  CardContainer,
  CardImg,
  InfoCardContainer,
  ProductCategory,
  ProductName,
  ProductPrice,
  SmallCardContainer,
} from "./ProductCardStyle";
import { formatPrice } from "../../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/cart/cartActions";

const ProductCard = ({ img, id, price, category, name }) => {
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <SmallCardContainer>
        <CardImg src={img} alt={name} />
        <InfoCardContainer>
          <ProductName> {name} </ProductName>
          <ProductCategory> {category} </ProductCategory>
          <ProductPrice> {formatPrice(price)} </ProductPrice>
        </InfoCardContainer>
        <AddCartButton
        onClick={() =>
          dispatch(cartActions.addToCart({ img, name, id, price }))
        }
        whileTap={{ scale: 0.95 }}
      >
        Agregar
      </AddCartButton>
      </SmallCardContainer>
    </CardContainer>
  );
};

export default ProductCard;