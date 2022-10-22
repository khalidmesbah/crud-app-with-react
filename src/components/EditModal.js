import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
export default function EditModal({ updateProducts, product }) {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState(product.category);
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [rate, setRate] = useState(product.rating.rate);
  const [count, setCount] = useState(product.rating.count);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: product.id,
        title,
        price,
        description,
        category,
        image,
        rating: { rate, count },
      }),
    })
      .then((res) => res.json())
      .then(updateProducts)
      .then(handleClose);
  };
  return (
    <>
      <button
        className="btn text-capitalize btn-warning"
        variant="primary"
        onClick={handleShow}
      >
        edit
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="my-form">
            <div>
              <label htmlFor="title">title</label>
              <input
                id="title"
                className="form-control"
                type="text"
                placeholder="title"
                value={title}
                required
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="category">category</label>
              <input
                id="category"
                className="form-control"
                type="text"
                placeholder="category"
                value={category}
                required
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="description">description</label>
              <input
                id="description"
                className="form-control"
                type="text"
                placeholder="description"
                value={description}
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="price">price</label>
              <input
                id="price"
                className="form-control"
                type="number"
                placeholder="price"
                value={price}
                required
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="image-url">image url</label>
              <input
                id="image-url"
                className="form-control"
                type="url"
                placeholder="image"
                value={image}
                required
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              ></input>
            </div>
            <label>rating</label>
            <div className="form-row d-flex gap-4">
              <div className="col">
                <label htmlFor="rate">rate</label>
                <input
                  id="rate"
                  className="form-control"
                  placeholder="rate"
                  value={rate}
                  required
                  onChange={(e) => {
                    setRate(e.target.value);
                  }}
                ></input>
              </div>
              <div className="col">
                <label htmlFor="count">count</label>
                <input
                  id="count"
                  className="form-control"
                  placeholder="count"
                  value={count}
                  required
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={submitForm}
            htmlFor="my-form"
            type="submit"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
