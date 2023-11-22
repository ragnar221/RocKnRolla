import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  MisOrdenesContainer,
  MisOrdenesTitle,
  MisOrdenesBtnContainer,
} from "./MyOrdersStyle";
import { getOrders } from "../../src/axios/axiosOrders";
import Submit from "../../src/Components/Submit/Submit";
import OrdersCard from "./OrdersCard";
import OrdersSlice, { clearError, fetchOrdersFail } from "../../redux/Orders/OrdersSlice";
import { Divisor, BannerWrapper } from "../../src/Components/outstandingBanner/OutstandingBannerStyle";
const MyOrders = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { orders, error } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      getOrders( dispatch, currentUser)
    }

    if (!currentUser?.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser, orders, error]);
  return (
    <>
      <MisOrdenesContainer>
        <BannerWrapper>
          <Divisor></Divisor>
          <MisOrdenesTitle>Mis órdenes</MisOrdenesTitle>
          <Divisor></Divisor>
        </BannerWrapper>

        <OrdersCard />
        <MisOrdenesBtnContainer>
          <Submit onClick={() => navigate("/")}>Volver a comprar</Submit>
        </MisOrdenesBtnContainer>
      </MisOrdenesContainer>
    </>
  );
};

export default MyOrders;