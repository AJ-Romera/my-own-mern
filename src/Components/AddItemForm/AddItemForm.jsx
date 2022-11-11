import { useState } from "react";
import { useHref } from "react-router-dom";
import "./addItemForm.css";

const AddItemForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addItem = async () => {
    let result = await fetch("http://localhost:5000/api/item", {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
        price,
        imageUrl,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    await result.json();
    setName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    alert("Your item has been added succesfully!");
  };

  return (
    <div className="add-item-form__container">
      <div className="add-item-form__form">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button onClick={addItem}>Create Item</button>
      </div>
      <div className="add-item-form__preview">
        <span>Preview</span>
        <img src={imageUrl} alt="" />
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default AddItemForm;
