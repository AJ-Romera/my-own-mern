import { Link } from "react-router-dom";
import "./itemCard.css";

const API_BASE_URL = "https://item-mern-api.onrender.com/api/";

const ItemCard = ({ item, items, setItems }) => {
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}item/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setItems(items.filter((item) => item._id !== data._id));
      alert(`${data.name} with id: ${data._id} was deleted`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="item-card">
      <Link to={`/item/${item._id}`}>
        <img src={item.imageUrl} alt="Item" className="item-card__img" />
      </Link>
      <p className="item-card__name">
        <Link to={`/item/${item._id}`}>{item.name}</Link>
      </p>
      <p className="item-card__description">{item.description}</p>
      <div className="item-card__buy-container">
        <span className="item-card__price">{item.price}€</span>
        <button className="item-card__buy-btn">Buy</button>
        <Link to={`/edit-item/${item._id}`}>
          <button className="item-card__edit-btn">Edit</button>
        </Link>
        <button
          className="item-card__delete-btn"
          onClick={() => deleteItem(item._id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
