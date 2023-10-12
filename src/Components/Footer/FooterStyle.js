import styled from "styled-components";

export const FooterData = styled.ul`
list-style-type: none;
text-align: baseline;
color: antiquewhite;
font-weight: 500;
font-family: Verdana, Geneva, Tahoma, sans-serif;
gap: 20px;
@media (max-width: 475px) {
    font-size: 10px;
}
`;

export const FooterImg = styled.img`
width: 10px;
height: 10px;
border-radius: 5px;
@media (max-width: 375px) {
  display: none;
}
`;

export const FooterSocialContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;