import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --blancotransp: rgba(250,250,250,0.2);
    --blancotransp2: rgba(250,250,250,0.6);
    --azultransp: rgba(0,0,110,0.2);
    --fondocarta: rgba(250,250,250,0.9);
    --azul: rgb(0, 48, 73);
    --rojo: rgb(214, 40, 40);
    --naranja: rgb(247, 127, 0);
    --amarillo: rgb(252, 191, 73);
    --blanco: rgb(234, 226, 183);
    --naranjatransp:  rgba(247,127,0, 0.4);
    --rojofuerte: #C21010;
    --negroheader: #000000;
    --fondobody: rgb(141,110,99);
    --naranja2: #F0A500;
    --grisbody: #EDF1D6;
    --Marron: #9d540f;
    --crema: #d0cb93;
    --grisAmarillento: #6c6552;

    --fontroboto:  'Roboto', sans-serif;
    --fontlato: 'Lato', sans-serif;
    --fontgrande: 'Permanent Marker', cursive;
    --font4: 'Tilt Neon', cursive;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
    /* background:url(https://res.cloudinary.com/dpxe6utid/image/upload/v1668126871/drinksCo/back1_wvr4k3.webp); */


width:100%;
    color: black;
    font-family: var(--fontroboto);
     /* background-color: var(--fondobody);
   */
     background: #ADA996;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top rgb(141,110,99),#BCAAA4 , #D7CCC8, #ADA996 );  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top,  rgb(141,110,99),#BCAAA4 ,#e6a466 , rgb(141,110,99)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  
}
a {
    text-decoration: none;
    color: black;
}
`;