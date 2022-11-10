import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemInfo from "../../Components/ItemInfo/ItemInfo";
import "./itemDetails.css";

const API_BASE_URL = "http://localhost:5000/api/";
// 636be4b2eb30b519d30a95e8

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
