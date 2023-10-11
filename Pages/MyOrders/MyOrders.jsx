import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  MisOrdenesContainer,
  MisOrdenesTitle,
  MisOrdenesBtnContainer,
} from "./MyOrdersStyle";
import Submit from "../../src/Components/Submit/Submit";
import OrdersCard from "./OrdersCard";
import OrdersSlice from "../../redux/Orders/OrdersSlice";
import { Divisor, BannerWrapper } from "../../src/Components/outstandingBanner/OutstandingBannerStyle";
const MyOrders = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { orders, error } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      dispatch(OrdersSlice.fetchOrdersSuccess(currentUser?.id));
    }

    if (!currentUser?.id) {
      dispatch(OrdersSlice.fetchOrdersFail());
    } else {
      error && dispatch(OrdersSlice.clearError());
    }
  }, [dispatch, currentUser?.id, orders, error]);
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