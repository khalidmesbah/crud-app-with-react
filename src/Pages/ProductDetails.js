import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:9000/products/${productId}`);
      const json = await res.json();
      setProduct(json);
    })();
  }, []);
  return (
    <>
      {!(
        product &&
        Object.keys(product).length === 0 &&
        Object.getPrototypeOf(product) === Object.prototype
      ) ? (
        <div className="d-md-flex gap-5">
          <div className="left text-center w-md-25 me-md-0 mt-auto mb-auto">
            <h1>Product #{product.id}</h1>
            <img
              src={product.image}
              alt={product.title}
              style={{ maxWidth: 250 + "px" }}
            />
          </div>
          <div className="right ps-4 pe-4">
            <h2 className="mt-3">- Title:</h2>
            <p>{product.title}</p>
            <h2>- Category:</h2>
            <p>{product.category}</p>
            <h2>- Description:</h2>
            <small>{product.description}</small>
            <h2>- Rating:</h2>
            <span>Rate: {product.rating.rate}</span>
            <br />
            <span>Count: {product.rating.count}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}
