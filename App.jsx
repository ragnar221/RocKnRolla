import "./App.css";
import Layout from "./src/Components/Layout/Layout";
import Routes from "./Routes/Routes";
import Footer from "./src/Components/Footer/Footer";
import Header from "./src/Components/header/Header";


function App() {
 
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