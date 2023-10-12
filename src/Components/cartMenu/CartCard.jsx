import React from "react";
import {
  CardTitleStyled,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
  TextStyled,
} from "./cartMenuStyle";
import { formatPrice } from "../../../utils/formatPrice";
import Increase from "../Increase/Increase";
import { useDispatch } from "react-redux";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { TbShoppingCartX } from "react-icons/tb";
import Count from "../count/Count";
import { cartActions } from "../../../redux/cart/cartActions";

const CartCard = ({ img, name, price, quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <ProductContainerStyled>
      <img src={img} alt="" />
      <TextContainerStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <TextStyled></TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase onClick={() => dispatch(cartActions.removeFromCart(id))}>
          {quantity === 1 ? <TbShoppingCartX /> : <AiFillMinusCircle />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase
          onClick={() =>
            dispatch(cartActions.addToCart({ img, name, price, id }))
          }
        >
          <AiFillPlusCircle />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default CartCard;