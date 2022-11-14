import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./itemList.css";

const API_BASE_URL = "http://localhost:5000/api/";

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
      {/* <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard /> */}
    </div>
  );
};

export default ItemList;
