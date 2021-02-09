import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";


function Item(props) {
  return (
    <button type="button" className={"btn btn-primary "} color={"blue"}>
      <Link to={props.href}><span className="nav-link">
        {props.icon}
        {props.text}</span></Link>
    </button>

  );
}
export default Item;