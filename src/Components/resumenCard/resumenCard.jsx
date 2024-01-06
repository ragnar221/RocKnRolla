import React from 'react'
import { productStyled, 
         productLeftStyled, 
         productPriceStyled,
         priceContainerStyled,
          } from './resumenCardStyle'; 
import { formatPrice } from '../../../utils/formatPrice';


const ResumenCard = ( {name, img, quantity, price} ) => {
  return (
    <productStyled>
        <productLeftStyled>
            <img
               src={img}
               alt={name}
               />
               <h3>{name}</h3>
        </productLeftStyled>
        <priceContainerStyled>
            <productPriceStyled>{formatPrice(price * quantity)}</productPriceStyled>
        </priceContainerStyled>
    </productStyled>
  );
};

export default ResumenCard;