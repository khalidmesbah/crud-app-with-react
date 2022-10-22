import "../App.css";
import OperationsBtnGroup from "./OperationsBtnGroup.js";
export default function Product({ product, onProductChange }) {
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  } = product;
  return (
    <tr>
      <td>{id}</td>
      <td>
        <img src={image} alt={title} />
      </td>
      <td>{`${title.slice(0, 20)}...`}</td>
      <td>{price}</td>
      <td className="desc">
        <small>{`${description.slice(0, 30)}...`}</small>
      </td>
      <td>{category}</td>
      <td>{rate}</td>
      <td>{count}</td>
      <td>
        <OperationsBtnGroup
          product={product}
          id={id}
          onButtonsClicked={onProductChange}
        />
      </td>
    </tr>
  );
}
