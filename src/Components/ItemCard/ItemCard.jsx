import "./itemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.imageUrl} alt="Item" className="item-card__img" />
      <p className="item-card__name">{item.name}</p>
      <p className="item-card__description">{item.description}</p>
      <div className="item-card__buy-container">
        <span className="item-card__price">{item.price}€</span>
        <button className="item-card__buy-btn">Buy</button>
      </div>
    </div>
  );
};

export default ItemCard;
