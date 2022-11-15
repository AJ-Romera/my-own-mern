import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddItem from "./pages/AddItem/AddItem";
import NavBar from "./Components/NavBar/NavBar";
import Error404 from "./Components/Error404/Error404";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import EditItem from "./pages/EditItem/EditItem";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/edit-item/:id" element={<EditItem />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
