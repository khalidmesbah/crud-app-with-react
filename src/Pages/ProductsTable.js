import { useEffect, useState } from "react";
import Product from "../components/Product";
import AddModal from "../components/AddModal";
import { Button, Modal } from "react-bootstrap";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const updateProducts = async () => {
    const res = await fetch("http://localhost:9000/products");
    const json = await res.json();
    setProducts(json);
  };
  useEffect(() => {
    updateProducts();
  }, []);

  return (
    <>
      <h1>Products Page</h1>
      <AddModal updateProducts={updateProducts} />
      <div className="table-responsive">
        <table className="table table-striped table-hover table-primary">
          <caption>Crud Operations App</caption>
          <thead>
            <tr className="text-capitalize">
              <th>id</th>
              <th>image</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
              <th>category</th>
              <th>rate</th>
              <th>count</th>
              <th>operations</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {products.map((product) => {
              return (
                <Product
                  product={product}
                  key={product.title}
                  onProductChange={updateProducts}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
