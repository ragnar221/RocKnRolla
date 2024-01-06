import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProtectedRoute from "../src/Components/ProtectedRoute/ProtectedRoute";
import Checkout from "../Pages/Checkout/Checkout";
import MyOrders from "../Pages/MyOrders/MyOrders";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Congrats from "../Pages/Congrats/Congrats";
import Summary from "../Pages/Summary/Summary";
import Blog from "../Pages/conocenos/conocenos";
import UserValidation from "../Pages/userValidation/userValidation";
import Welcome from "../Pages/welcome/welcome";
import RecoverPassword from "../Pages/RecoverPassword/recoverPassword";


const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo="/login">
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="/misordenes" element={<MyOrders />} />
      <Route path="/congrats" element={<Congrats />} />
      <Route path="/resumen" element={<Summary />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/userValidation" element={<UserValidation/>}/>
      <Route path="/Welcome" element={<Welcome/>}/>
      <Route path="/RecoverPassword" element={<RecoverPassword/>}/>
      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
};

export default Routes;