import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

import Img from "../assets/imgs/Fireworks.png";

const Congrats = () => {

    let navigate = useNavigate();

    const button = {
        label: "Done",
        style: "btn-primay-enabled anchored-bottom"
    }

    return (
        <div className="frame">
            <div className="container full-height-content-centered">
                <h4>Great! Well Done!</h4>
                <p className="congrats-text">You just finished Muscle Relaxation. Add this tool as a favorite to practice it again in the future.</p>
                <img src={Img} className="bottom-img" />                
                <Button label={button.label} style={button.style} onClickFunc={() => navigate("/tool-list")} />
            </div>
            
        </div>
    )
}

export default Congrats;