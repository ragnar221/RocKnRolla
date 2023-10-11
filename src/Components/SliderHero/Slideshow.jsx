import React from "react";
import {
  SlideContainer,
  SlideInfo,
  SlideInfoContainer,
  SliderButton,
  SliderWrapper,
  SlideTitle,
} from "./SlideshowStyle";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

import { Link } from "react-router-dom";

const slideImages = [
  {
    url: "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696878885/slider1_aavqak.jpg",
    caption: "Slide 1",
    price: "$5000",
    linkpromo: "contacto",
    title: "Hacemos tu campera a medida",
    info: "",
    buttonInfo: "¡Consultanos!",
  },
  {
    url: "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696878885/slider2_y9oxr2.webp",
    caption: "Slide 2",
    price: "$5000",
    linkpromo: "",
    title: "¡Ofertas especiales!",
    info: "aprovecha nuestras ultimas ofertas",
    buttonInfo: "¡Aprovechalos!",
  },
  {
    url: "https://res.cloudinary.com/dfpp4mriw/image/upload/v1696878885/slider3_qjnxg9.jpg",
    caption: "Slide 3",
    price: "$5000",
    linkpromo: "Descubrenos",
    title: "Dejanos contarte acerca de nosotros",
    info: "conocenos y permitenos mostrarte algunos de nuestros diseños exclusivos",
    buttonInfo: "descubrenos",
  },
];
const Slideshow = () => {
  return (
    <div style={{ width: "100%" }}>
      <Fade>
        {slideImages.map((slideImage, index) => (
          <SliderWrapper key={index}>
            <SlideContainer
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <SlideInfoContainer>
                <SlideTitle> {slideImage.title} </SlideTitle>
                <SlideInfo> {slideImage.info} </SlideInfo>
                <Link to={slideImage.linkpromo}>
                  <SliderButton> {slideImage.buttonInfo} </SliderButton>
                </Link>
              </SlideInfoContainer>
            </SlideContainer>
          </SliderWrapper>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;