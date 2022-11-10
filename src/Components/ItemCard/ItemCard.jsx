import "./itemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.imageUrl} alt="Item" className="item-card__img" />
      <p className="item-card__name">{item.name}</p>
      <p className="item-card__description">{item.description}</p>
    </div>
  );
};

export default ItemCard;
