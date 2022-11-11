import "./addItemForm.css";

const AddItemForm = () => {
  return (
    <div className="add-item-form__container">
      <div className="add-item-form__form">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="description" />
        <input type="text" placeholder="price" />
        <input type="text" placeholder="imageUrl" />
        <button>Create Item</button>
      </div>
      <div className="add-item-form__preview">
        <span>Preview</span>
      </div>
    </div>
  );
};

export default AddItemForm;
