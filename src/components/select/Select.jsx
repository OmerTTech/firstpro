import axios from "axios";
import "./select.css";
const Select = ({ category, setItems}) => {
const changeHandler = (e)=>{
  const getProducts = async () => {
    const { data } = await axios.get(
      e.target.value === "all" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${e.target.value}`
    );
    setItems(data);
  };
  getProducts();
}


  return (
    <div>
      <select
        onChange={changeHandler}
        name="categories"
        id="categories"
      >
        <option value="all">All Products</option>
        {category?.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
