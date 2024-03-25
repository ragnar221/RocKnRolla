import { Link } from "react-router-dom";
import styledfrom, { styled } from "styled-components";

export const ResumenWrapperStyled = styled.div`
padding: 2rem, 7rem;
width: 100%;
//height: 100vh;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap: 5px;
`;

export const ResumenTitleStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 4rem;
`;

export const LinkStyled = styled(Link)`
padding: 0.8rem, 1.5rem;
outline: none;
border: none;
border-radius: 4px;
background-color: black;
text-transform: uppercase;
font-weight: 700;
cursor: pointer;
`;

export const ProductsContainerStyled = styled.div`
 display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const HrStyled = styled.hr`
margin: 4rem 0;
`;

export const ResumenInfoStyled = styled.div`
width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ProductCostStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShipmentCostStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalCostStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;