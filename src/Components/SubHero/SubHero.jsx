import React from "react";
import { DivDer, DivIzq, InfoSubHero, SubHeroWrapper } from "./SubHeroStyle";

const SubHero = () => {
  return (
    <SubHeroWrapper>
      <DivIzq>
        <InfoSubHero>Envios a todo el pais</InfoSubHero>
      </DivIzq>
      <DivDer>
        <InfoSubHero>Hasta 3 cuotas sin interes</InfoSubHero>
      </DivDer>
    </SubHeroWrapper>
  );
};

export default SubHero;