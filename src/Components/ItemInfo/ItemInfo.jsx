import "./itemInfo.css";

const ItemInfo = ({ item }) => {
  return (
    <div className="item-info__container">
      <div className="item-info__image-container">
        <img src={item.imageUrl} alt="item" className="item-info__image" />
      </div>
      <div className="item-info__info-container">
        <div className="item-info__name">{item.name}</div>
        <div className="item-info__description">{item.description}</div>
        <div className="item-info__price">{item.price}€</div>
        <button className="item-info__button">Buy Now</button>
      </div>
    </div>
  );
};

export default ItemInfo;
