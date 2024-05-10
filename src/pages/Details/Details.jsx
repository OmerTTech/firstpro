import React, { useEffect, useState } from "react";
import "./details.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const Details = () => {
  const [item, setItem] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getItem = async () => {
      await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((resolve) => setItem(resolve.data))
        .catch((error) => console.log(error));
    };
    getItem();
  });

  return (
  item&&<div className="container">
    <div className="wrapper">
      <img src={item.image} alt="" />
      <div className="body">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div className="click">
          <p>{item.price}$</p>
          <button className="button">Add To Card</button>
        </div>
      </div>
    </div>

  </div>
  );
};

export default Details;
