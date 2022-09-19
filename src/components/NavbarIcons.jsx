import React from "react";

import BackArrowWhite from "../assets/icons/back-arrow-white.svg";
import ClosedCaption from "../assets/icons/cc.svg";
import Info from "../assets/icons/info.svg";
import FavouriteDeselectedWhite from "../assets/icons/favourite-white.svg";

const NavbarIcons = (props) => {

    return (
        <nav className={props.style}>
            <div className="container">
                <div className="nav">
                    <img src={BackArrowWhite} onClick={props.onClickFunc} />
                    <div className="navbar-icons-right">
                        <img className="navbar-icon-right" src={FavouriteDeselectedWhite} />
                        <img className="navbar-icon-right" src={Info} />
                        <img className="navbar-icon-right" src={ClosedCaption} />
                    </div>
                </div>                
            </div>            
        </nav>
    )
}

export default NavbarIcons;