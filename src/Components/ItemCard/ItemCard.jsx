import "./itemCard.css";

const ItemCard = () => {
  return (
    <div className="item-card">
      <img
        src="https://images.unsplash.com/photo-1545312986-594f58761a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Item"
        className="item-card__img"
      />
      <p>Name of the item</p>
      <p>Desc of the item</p>
    </div>
  );
};

export default ItemCard;
