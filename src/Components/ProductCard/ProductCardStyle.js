import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 14rem;
  height: 18rem;
  gap: 0rem;
  padding: 1rem;
  background-color: var(--blancotransp);
  border-radius: 1rem 1rem 0rem 1rem;
  color: black;
  box-shadow: 2px 4px 12px 2px var(--negroheader);
  &:hover {
    /* background-color: black; */
    box-shadow: 2px 4px 12px 2px var(--naranja);
  }
  @media only screen and (max-width: 624px) {
    scale: 90%;
  }
`;

export const InfoCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0rem;
  /*position: relative;
  left: -8rem;
  top: 1.5rem;*/
  height: 9rem;
`;

export const ProductName = styled.h2`
  font-size: 1rem;
  text-align: center;
 /* margin-top: 0.5rem;*/
`;

export const ProductCategory = styled.h4`
  font-size: 0.8rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.4rem;
`;

export const AddCartButton = styled(motion.button)`
  margin-top: 1.5rem;
  width: 8rem;
  height: 2.4rem;
  border-radius: 0.8rem;
  padding: 0.5rem;
  outline: none;
  border: none;
  background-color: var(--negroheader);
  color: rgb(234, 226, 183);
  font-weight: bold;
  cursor: pointer;
  &:hover {
    /* background-color: black; */
    /* box-shadow: 2px 4px 8px 2px var(--azul); */
  }
`;

export const SmallCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  height:14rem;
  /*gap: 2rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  padding: 0.4rem;*/
`;
export const CardImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 0.2rem;
  box-shadow: 2px 4px 8px 2px var(--negroheader);
  /*position: relative;
  top: -4rem;
  left: 1.8rem;*/
`;
