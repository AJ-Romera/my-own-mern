import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./itemList.css";

const API_BASE_URL = "https://item-mern-api.onrender.com/api/";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const response = await fetch(API_BASE_URL + "items");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard
          key={item._id}
          item={item}
          items={items}
          setItems={setItems}
        />
      ))}
    </div>
  );
};

export default ItemList;
