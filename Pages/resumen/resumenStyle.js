import { Link } from "react-router-dom";
import styledfrom, { styled } from "styled-components";

export const resumenWrapperStyled = styled.div`
padding: 2rem, 7rem;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const resumenTitleStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const linkStyled = styled(Link)`
padding: 0.8rem, 1.5rem;
outline: none;
border: none;
border-radius: 4px;
background-color: black;
text-transform: uppercase;
font-weight: 400;
cursor: pointer;

& span {
    font-weight: 700;
    font-size: 1rem;
    background-color: burlywood;
    -webkit-background-clip: text;
    color: transparent;
}
`;

export const productsContainerStyled = styled.div`
 display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-wrap: wrap;
`;

export const hrStyled = styled.hr`
margin: 4rem 0;
`;

export const ResumenInfoStyled = styled.div`
width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const productCostStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const shipmentCostStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const totalCostStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;