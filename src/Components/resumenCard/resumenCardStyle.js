import styled from "styled-components";

export const productStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background: gray;
  border-radius: 15px;
  padding: 1.5rem 1rem;
  width: 90%;
  max-width: 620px;
`;

export const productLeftStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const priceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const productPriceStyled = styled.div`
  font-weight: 800;
  font-size: 2rem;
  background: var(--btn-gradient);
  -webkit-background-clip: text;
  color: transparent;
`;