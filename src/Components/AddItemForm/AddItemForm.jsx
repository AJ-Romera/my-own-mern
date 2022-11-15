import { useState } from "react";
import "./addItemForm.css";

const AddItemForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addItem = async () => {
    let result = await fetch("https://item-mern-api.onrender.com/api/item", {
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
        <div className="form__group field">
          <input
            id="name"
            className="form__field"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name" className="form__label">
            Name
          </label>
        </div>
        <div className="form__group field">
          <input
            id="description"
            className="form__field"
            type="text"
            placeholder="Description of the item"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label htmlFor="description" className="form__label">
            Description
          </label>
        </div>
        <div className="form__group field">
          <input
            id="price"
            className="form__field"
            type="number"
            placeholder="How much it cost?"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <label htmlFor="price" className="form__label">
            Price
          </label>
        </div>
        <div className="form__group field">
          <input
            id="imageUrl"
            className="form__field"
            type="text"
            placeholder="Image of the item"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <label htmlFor="imageUrl" className="form__label">
            Image URL
          </label>
        </div>

        <button onClick={addItem} className="add-item__button">
          Create Item
        </button>
      </div>

      {name && (
        <div className="add-item-form__preview">
          <span className="add-item-form__title">Preview:</span>

          <div className="item-card">
            {imageUrl && (
              <img src={imageUrl} alt="Item" className="item-card__img" />
            )}
            <p className="item-card__name">{name}</p>
            {description && (
              <p className="item-card__description">{description}</p>
            )}
            <div className="item-card__buy-container">
              {price && <span className="item-card__price">{price}€</span>}
              <button className="item-card__buy-btn">Buy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItemForm;
