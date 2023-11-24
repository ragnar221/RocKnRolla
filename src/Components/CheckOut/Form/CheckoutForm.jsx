import React from "react";
import Submit from "../../Submit/Submit";
import {
  CheckoutDatosStyled,
  CheckoutWrapper2,
  Form,
  Formik,
} from "./CheckoutFormStyles";
import InputForm from "./InputForm";
import { checkoutInitialValues } from "../../../Formik/InitialValues";
import { checkoutValidationSchema } from "../../../Formik/ValidationSchema";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrdersSlice, { clearOrders } from "../../../../redux/Orders/OrdersSlice";
import { cartActions, clearCart } from "../../../../redux/cart/cartActions";
import Loader from "../../Loader/Loader";
import {
  BannerWrapper,
  Divisor,
} from "../../outstandingBanner/OutstandingBannerStyle";
const CheckoutForm = ({ cartItems, price, shippingCost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <CheckoutWrapper2>
        <BannerWrapper>
          <Divisor></Divisor>{" "}
          <h2 style={{ textAlign: "center" }}>Completa tus datos:</h2>
          <Divisor></Divisor>
        </BannerWrapper>

        <CheckoutDatosStyled>
          <Formik
            initialValues={checkoutInitialValues}
            validationSchema={checkoutValidationSchema}
            onSubmit={async (values) => {
              const orderData = {
                items: cartItems,
                price,
                shippingCost,
                total: price + shippingCost,
                shippingDetails: {
                  ...values,
                },
              };
              console.log({ orderData });
              try {
                await createOrder(orderData, dispatch, currentUser);
                navigate("/congrats")
                dispatch(clearCart())
              } catch (error) {
                alert("Error creando pedido");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputForm
                  name="name"
                  htmlFor="nombre"
                  type="text"
                  id="nombre"
                  placeholder="Nombre"
                ></InputForm>
                <InputForm
                  name="cellphone"
                  htmlFor="telefono"
                  type="text"
                  id="telefono"
                  placeholder="Telefono"
                ></InputForm>
                <InputForm
                  name="location"
                  htmlFor="localidad"
                  type="text"
                  id="localidad"
                  placeholder="Localidad"
                ></InputForm>
                <InputForm
                  name="address"
                  htmlFor="direccion"
                  type="text"
                  id="dirección"
                  placeholder="Dirección"
                ></InputForm>
                <Submit disabled={!cartItems.length || isSubmitting}>
                  {isSubmitting ? <Loader /> : "Iniciar compra"}
                </Submit>
              </Form>
            )}
          </Formik>
        </CheckoutDatosStyled>
      </CheckoutWrapper2>
    </>
  );
};

export default CheckoutForm;