import React from "react";
import {
  ContactoContainerStyled,
  ContactoTitulo,
  ContactoP,
} from "./ContactStyle";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { BannerWrapper } from "../../src/Components/outstandingBanner/OutstandingBannerStyle";
import { Divisor } from "../../src/Components/outstandingBanner/OutstandingBannerStyle";

const Contact = () => {
  return (
    <ContactoContainerStyled>
      <BannerWrapper>
        <Divisor></Divisor>
        <ContactoTitulo>
          ¡Nos podes llamar o enviarnos un correo!
        </ContactoTitulo>
        <Divisor></Divisor>
      </BannerWrapper>

      <ContactoTitulo>
        <BsTelephone /> Telefono:
      </ContactoTitulo>
      <ContactoP> 0-800-666-drink</ContactoP>
      <ContactoTitulo>
        <FaRegEnvelope /> Email:
      </ContactoTitulo>
      <ContactoP> info@drinksco.com</ContactoP>
    </ContactoContainerStyled>
  );
};

export default Contact;