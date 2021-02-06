import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = (props) => (
    <button
        className={["Button", "Button"[props.btnType]].join(" ")}
        onClick={props.clicked}>
        {props.children}
        <Link to={props.href}><span className="nav-link">
            {props.icon}
            {props.text}</span></Link>
        {props.name}
    </button>
);

export default Button;

//

