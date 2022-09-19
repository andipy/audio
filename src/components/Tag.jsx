import React from "react";

const Tag = (props) => {
    return (
        <div className="tag">
            <img src={props.icon} />
            <span>{props.label}</span>
        </div>
    )
}

export default Tag;