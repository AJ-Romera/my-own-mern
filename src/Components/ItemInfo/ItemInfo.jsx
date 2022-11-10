import "./itemInfo.css";

const ItemInfo = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <img src={item.imageUrl} alt="item" />
    </div>
  );
};

export default ItemInfo;
