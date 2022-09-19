import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import ArrowGo from "../assets/icons/arrow-go.svg";

const ToolListItem = (props) => {

    let navigate = useNavigate();

    return (
        <div className={props.style}>
            <div className="tool-group">
                <div className="img-placeholder"></div>
                <span>{props.tool}</span>
            </div>
            <img src={ArrowGo} alt="" />
        </div>
    )
}

export default ToolListItem;