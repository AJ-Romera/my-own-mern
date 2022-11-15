import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemInfo from "../../Components/ItemInfo/ItemInfo";
import "./itemDetails.css";

const API_BASE_URL = "https://item-mern-api.onrender.com/api/";

const ItemDetails = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    getItemDetails();
  }, []);

  const itemId = useParams();
  const getItemDetails = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}item/${itemId.id}`);
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ItemInfo item={item} />
    </div>
  );
};

export default ItemDetails;
