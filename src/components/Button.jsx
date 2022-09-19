import React from "react";

const Button = (props) => {
    return (
        <button
            className={props.style}
            onClick={props.onClickFunc}
            disabled={props.disabled}
        >
                {props.label}
        </button>
    )
}

export default Button;