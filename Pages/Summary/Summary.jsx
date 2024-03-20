import React, { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";

import SummaryCard from "./SummaryCard";
import Link from "../../src/Components/Link/Link";

import {
  CostoEnvioStyled,
  CostoProductoStyled,
  CostoTotalStyled,
  HrStyled,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
} from "./SummaryStyle";
import OrdersSlice from "../../redux/Orders/OrdersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Summary = () => {
  const [visitedOrder, setVisitedOrder] = useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const orders = useSelector((state) => state.orders.orders);

  const dispatch = useDispatch();

  const { orderId } = useParams();

  useEffect(() => {
    if (!orders) {
      dispatch(OrdersSlice.getFullOrders(currentUser?._id));
    }

    setVisitedOrder(orders?.find((order) => order._id === orderId));
  }, [orderId, currentUser?.id, orders, dispatch]);

  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>Resumen Orden: #{visitedOrder?.id.slice(0, 7)}</h1>
        <Link to="/misordenes"></Link>
      </ResumenTitleStyled>
      <h2>Productos:</h2>
      <ProductsContainerStyled>
        {visitedOrder?.items.map((item) => (
          <SummaryCard key={item.id} {...item} />
        ))}
      </ProductsContainerStyled>
      <HrStyled />
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span>{formatPrice(visitedOrder?.price)}</span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span>{formatPrice(visitedOrder?.shippingCost)}</span>
        </CostoEnvioStyled>
        <CostoTotalStyled>
          <p>Total</p>
          <span>{formatPrice(visitedOrder?.total)}</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default Summary;