import React from "react";
import {
  CateCardContainer,
  CateCardImg,
  CateCardTitle,
} from "./CategoriesCardStyle";
import { categoriesActions } from "../../../redux/categories/categoriesActions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

export const CategoriesCard = ({ title, img, category }) => {
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();
  return (
    <motion.div whileTap={{ scale: 0.92 }}>
      <CateCardContainer
        selected={category === selectedCategory}
        onClick={() => dispatch(categoriesActions.selectCategory(category))}
      >
        <CateCardTitle> {title} </CateCardTitle>
        <CateCardImg
          src={
            "https://res.cloudinary.com/dfpp4mriw/image/upload/v1697055447/leatherBackground_ziinv1.avif"
          }
          alt={category}
        />
      </CateCardContainer>
    </motion.div>
  );
};

export default CategoriesCard;