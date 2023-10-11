import React from "react";
import Slideshow from "../../src/Components/SliderHero/Slideshow";
import SubHero from "../../src/Components/SubHero/SubHero";
import Offers from "../../src/Components/Offers/Offers";
import {
  ButtonVisit,
  DivVisit,
  HomeWrapper,
  ProdContainerRef,
  VisitTitle,
} from "./HomeStyle";
import CategoriesSection from "../../src/Components/categories/CategoriesSection";
import ProductsSection from "../../src/Components/ProductsSection/ProductsSection";
import OutstandingBanner from "../../src/Components/outstandingBanner/OutstandingBanner";
import OutstandingProducts from "../../src/Components/outstandingProducts/OutstandingProducts";
import { Link } from "react-router-dom";

// import { useRef } from "react";

const Home = () => {
  // const productsRef = useRef();
  // const doScroll = () => {
  //   window.scrollTo(
  //     productsRef.current.getBoundingClientRect().x,
  //     productsRef.current.getBoundingClientRect().y
  //   );
  // };
  return (
    <HomeWrapper>
      <Slideshow />
      <SubHero />
      <OutstandingBanner />
      <Offers />
      <OutstandingProducts />
      <CategoriesSection />
      <ProdContainerRef>
        <ProductsSection />
      </ProdContainerRef>
      <DivVisit>
        <VisitTitle> ¡ven a conocer nuestro negocio!</VisitTitle>
        <Link to="blog" style={{ fontSize: "1.2rem" }}>
          <ButtonVisit> Visitar</ButtonVisit>
        </Link>
      </DivVisit>
    </HomeWrapper>
  );
};

export default Home;