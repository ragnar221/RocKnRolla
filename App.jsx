import "./App.css";
import Layout from "./src/Components/Layout/Layout";
import Routes from "./Routes/Routes";
import Footer from "./src/Components/Footer/Footer";
import Header from "./src/Components/header/header";
import { useState } from "react";
import Login from "./Pages/Login/Login";



function App() {
 //const [token,setToken] = useState();
 //if (token) {
  //return <Login setToken={setToken} />
 //}
  return (
    <>
      <Layout>
        <Header />
        <Routes />
        <Footer />
      </Layout>
    </>
  );
};

export default App;