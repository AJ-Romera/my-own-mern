import AddItemForm from "../../Components/AddItemForm/AddItemForm";
import "./addItem.css";

const AddItem = () => {
  return (
    <div>
      <p className="add-item__title">Create a New Item to Sell</p>
      <AddItemForm />
    </div>
  );
};

export default AddItem;
