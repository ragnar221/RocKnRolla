import styled from "styled-components";

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  margin-top: 2rem;
  height: auto;
  margin-bottom: 2rem;
  padding: 1rem;
  @media only screen and (max-width: 624px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const BlogTitle = styled.h2`
  text-align: center;
  box-shadow: 2px 4px 12px 2px var(--negroheader);
  padding: 0.5rem;
  border-radius: 0.4rem;
  background-color: white;
  font-size: 1.8rem;
  @media only screen and (max-width: 624px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;
export const BlogSubTitle = styled.h3`
  text-align: center;
  box-shadow: 2px 4px 12px 2px var(--negroheader);
  padding: 0.5rem;
  border-radius: 0.4rem;
  background-color: white;
  font-size: 3rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 624px) {
    font-size: 1.4rem;
  }

  @media (max-width: 425px) {
    width: 17rem;
  }
`;
export const ContainerRecetas = styled.div`
  width: 100%;
`;
export const ContainerTips = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const TipsInfo = styled.p`
font-weight: 400;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
export const BarraList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  height: auto;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
`;
export const BarraItem = styled.li``;
export const BlogHeroImg = styled.img``;
export const BlogHeroContainer = styled.div`
  width: 100%;
  height: 24rem;
  background: url("https://res.cloudinary.com/dfpp4mriw/image/upload/v1697044917/jacaz-leather-banner-sale-1_dbutna.png")
    no-repeat center;
  background-size: cover;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 624px) {
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const RecipePaper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const RecipeLabelContainer = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`;

export const RecipeLabel = styled.div`
display: flex;
width: 3rem;
height: 2rem;
justify-content: center;
align-items: center;
background-image: url(https://res.cloudinary.com/dfpp4mriw/image/upload/v1697055447/leatherBackground_ziinv1.avif);
border-radius: 6rem;
color: antiquewhite;
font-weight: 600;
margin: 2rem;
`;

export const RecipeLog = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const CardsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: burlywood;
margin-top: 4rem;
width: 60%;
`;

export const WorkshopImg = styled.img`
width: 500px;
height: auto;
border-radius: 4rem;
box-shadow: 2px 4px 12px 2px var(--negroheader) ;
@media (max-width: 425px) {
  width: 200px;
}
`;
