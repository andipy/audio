import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

import Img from "../assets/imgs/What.png";

const Intro2 = () => {

    let navigate = useNavigate();

    const button = {
        label: "Next",
        style: "btn-primay-enabled anchored-bottom"
    }

    return (
        <div className="frame">
            <Navbar onClickFunc={() => navigate(-1)} />
            <div className="container nav-padding">
                <div>
                    <img src={Img} className="icon-img" />
                </div>                
                <p className="intro-text">You will have to listen to a guided audio exercise, and execute it along side.</p>
                <Button label={button.label} style={button.style} onClickFunc={() => navigate("/intro-3")} />
            </div>
            
        </div>
    )
}

export default Intro2;