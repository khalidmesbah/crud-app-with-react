import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/ProductsTable";
import ProductDetails from "./Pages/ProductDetails";
function App() {
  return (
    <div className="bg-light">
      <Header />
      <div className="container">
        <div className="row m-0">
          <div className="col-12 bg-dark text-light">
            <Routes>
              <Route path="" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="products">
                <Route path="" element={<Products />}></Route>
                <Route path=":productId" element={<ProductDetails />}></Route>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
