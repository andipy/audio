import React from "react";

import BackArrow from "../assets/icons/back-arrow.svg";
import FavouriteDeselected from "../assets/icons/favourite.svg";

const Navbar = (props) => {

    return (
        <nav className="nav-main">
            <div className="container">
                <div className="nav">
                    <img src={BackArrow} onClick={props.onClickFunc} />
                    <img src={FavouriteDeselected} />
                </div>                
            </div>            
        </nav>
    )
}

export default Navbar;