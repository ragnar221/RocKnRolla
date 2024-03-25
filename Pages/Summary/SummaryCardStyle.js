import styled from "styled-components";

export const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--blancotransp);
  border-radius: 15px;
  border: 4px;
  padding: 1.5rem 1rem;
  width: 100%;
  height: auto;
  max-width: 620px;

  img {
    width: 200px;
    height: auto;
    margin-left: 4rem;
    border-radius: 4px;
    box-shadow: 2px 2px 12px 2px var(--negroheader);
  }

  h3 {
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    padding: 2rem;
    margin: 2rem;
    }
`;

export const ProductLeftStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
`;