import React from "react";
import styled from "styled-components";
import { FooterData, FooterImg, FooterSocialContainer, } from "./FooterStyle";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import Logo from "../Logo/Logo";


export const FooterWrapper = styled.header`
  height: 16vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border-radius: 0 0 0.6em 0.6rem; */
  background-color: var(--negroheader);
  -webkit-box-shadow: 0px 3px 3px var(--naranja2);
  -moz-box-shadow: 0px 3px 3px var(--naranja2);
  box-shadow: 0px 3px 3px var(--naranja2);
  border-top: 1px solid var(--naranja2);
  bottom: 0rem;
  z-index: 0;
`;
export const FooterInfo = styled.p`
  color: white;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterData>
        <li>Av. siempre viva 8201</li>
        <li>011123456</li>
        <li>0 800 567 8910</li>
        <li>mail.falso@gmail.com</li>
      </FooterData>
      <FooterImg src="https://res.cloudinary.com/dfpp4mriw/image/upload/v1696882486/logo2_xzqy2k.png" alt="logo"/>
      <FooterSocialContainer>  
        <BsInstagram style={{ color: "white", cursor: "pointer" }} />
        <BsFacebook  style={{ color: "white", cursor: "pointer" }} />
        <BsTwitter style={{ color: "white", cursor: "pointer" }} />
       </FooterSocialContainer>
    </FooterWrapper>
  );
};

export default Footer;