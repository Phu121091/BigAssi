import React from "react";
import "./styles.css";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Item = ({ name, date, amount, handleDelete, id }) => {
    const newdate = (new Date(date)).toString().slice(4,15);
    
  return (
    <div className="item">
      <p className="date">{newdate}</p>
      <p className="name">{name}</p>
      <p className="price">$ {amount}</p>
      <span className="icon" onClick={() => handleDelete(id)}>
        <RiDeleteBin2Fill fontSize={"30px"} color="white" />
      </span>
    </div>
  );
};

export default Item;