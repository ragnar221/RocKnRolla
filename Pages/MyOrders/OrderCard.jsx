import React from "react";
import { useNavigate } from "react-router-dom";
import {
  OrderCard,
  OrderId,
  OrderInfoContainer,
  OrderPrice,
  OrderTitle,
} from "./MyOrdersStyle";
import { formatPrice } from "../../utils/formatPrice";
import { formatDate } from "../../utils/formatDate";


const MyOrderCard = ({ createdAt, total, _id }) => {
  const navigate = useNavigate();

  return (
    <OrderCard onClick={() => navigate(`/resumen/${_id}`)}>
      <OrderInfoContainer>
        <OrderTitle>ID de la orden: #{_id}</OrderTitle>
        <OrderId>Fecha {formatDate(createdAt)}hs</OrderId>
        <OrderPrice>{formatPrice(total)}</OrderPrice>
      </OrderInfoContainer>
    </OrderCard>
  );
};

export default MyOrderCard;