import { Link } from "react-router-dom";
import EditModal from "./EditModal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function OperationsBtnGroup({ id, onButtonsClicked, product }) {
  const MySwal = withReactContent(Swal);
  const confirmDeletion = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const deleteProduct = async () => {
          fetch(`http://localhost:9000/products/${id}`, {
            method: "Delete",
          }).then(onButtonsClicked);
        };
        deleteProduct();
      }
    });
  };
  return (
    <div className="btn-group-vertical">
      <Link to={`/products/${id}`} className="btn text-capitalize btn-success">
        view
      </Link>
      <EditModal product={product} updateProducts={onButtonsClicked}/>
      <button
        className="btn text-capitalize btn-danger"
        onClick={confirmDeletion}
      >
        delete
      </button>
    </div>
  );
}
