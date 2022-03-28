import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price,id }) {
  return (
    <Link to={`/food/${id}`}>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p>
    </div>
    </Link>
  );
}

export default MenuItem;
