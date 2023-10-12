import "./App.css";
import Header from "./src/Components/header/header";
import Layout from "./src/Components/Layout/Layout";
import Routes from "./Routes/Routes";
import Footer from "./src/Components/Footer/Footer";


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