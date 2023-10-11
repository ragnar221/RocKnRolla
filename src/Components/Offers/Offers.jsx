import React from "react";
import { useSelector } from "react-redux";
import { OfertasContainer } from "./OffersStyle";
import CardOfertas from "./OfferCards";

const Offers = () => {
  const ofertas = useSelector((state) => state.ofertas.ofertas);
  return (
    <>
      {/* <h2 style={{ fontFamily: "var(--fontgrande)", fontSize: "3rem" }}>
        Ofertas del dia
      </h2> */}
      <OfertasContainer>
        {ofertas.map((oferta) => (
          <CardOfertas key={oferta.id} {...oferta} />
        ))}
      </OfertasContainer>
    </>
  );
};

export default Offers;