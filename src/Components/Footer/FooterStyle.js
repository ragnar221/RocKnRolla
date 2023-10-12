import styled from "styled-components";

export const FooterData = styled.ul`
list-style-type: none;
text-align: baseline;
color: antiquewhite;
font-weight: 500;
font-family: Verdana, Geneva, Tahoma, sans-serif;
gap: 20px;
@media (max-height: 425px) {
  font-size: 10px;
}
@media (max-width: 768px) {
    font-size: 10px;
}
`;

export const FooterImg = styled.img`
width: 100px;
height: 100px;
border-radius: 5px;
@media (max-height: 425px) {
  width: 50px;
  height: 50px;
}
@media (max-width: 375px) {
  display: none;
}
`;

export const FooterSocialContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
@media (max-height: 425px) {
  flex-direction: row;
}

@media only screen and (max-width: 768px) {
  flex-direction: row;
}
`;