import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/productcard/ProductCard";
import DotLoader from "react-spinners/DotLoader";
import "./product.css";
import SearchBar from "../../components/searchBar/searchBar";
import Select from "../../components/select/Select";
const Product = () => {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setItems(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setVal(data);
    };
    getCategory();
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between px-5">
        <SearchBar setItems={setItems} input={items}/>
        <span>
          <Select setItems={setItems} category={val} />
        </span>
      </div>

      <div className="container  my-3">
        <div className="row row-gap-3">
          {items ? (
            items.map((element) => {
              return <ProductCard key={element.id} link={element} />;
            })
          ) : (
            <div className="pulse">
              <DotLoader color="#36d7b7" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
