import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MenuList } from "../helpers/MenuList";
import './Product.css';
import {Link} from 'react-router-dom'

export default function Product() {
  let {id} = useParams();
  // const mainId=id
  const list = MenuList[id-1];
  
  
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(list.price);

  const handlePlus = () => {
    setCount(count+1)
    setTotalPrice((count+1)*list.price)
  }

  const handleMinus = () => {
    setCount(count-1);
    setTotalPrice((count-1) * list.price);

  }

  return (
    <div className="flexbox">
      <div className="menuItem">
        <div style={{ backgroundImage: `url(${list.image})` }}> </div>
        <h1> {list.name} </h1>
        <p> ₹{list.price} </p>
      </div>
      <div>
        <div className="flexbox bringcenter">
          <button className="bttn" onClick={handlePlus}>
            +
          </button>
          <div>{count}</div>
          <button className="bttn" onClick={handleMinus}>
            -
          </button>
        </div>
        <div>
          <p>Total Price:</p>
          <p>{totalPrice}</p>
        </div>
        <Link to="/thankyou" className="confirm">Confirm</Link>
      </div>
    </div>
  );
}
