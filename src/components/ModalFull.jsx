import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Close from "../assets/icons/close.svg";
import Button from "./Button";

const ModalFull = (props) => {

    let navigate = useNavigate();

    const goToExercise = () => {
        navigate("/exercise");
    }

    const sortFunc = () => {
        if (window.location.pathname == "/exercise") {
            return props.onCloseFunc
        } else {
            return goToExercise            
        }
    }

    const goToModalOne = () =>{
        setCurrentModal(
            {
                modal_id: 1,
                modal_content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam repellendus sit tempore rem nihil voluptate alias nam magnam fugiat et temporibus laborum reprehenderit, quidem voluptatum qui sunt neque in aperiam impedit officiis nulla ex delectus nostrum. Id, ratione. Ratione assumenda blanditiis quaerat ipsam quo enim id, quis iste iusto!",
                modal_buttons: [
                    {
                        id: 1,
                        label: "Next",
                        style: "btn-primay-enabled anchored-bottom",
                        onClickFunc: goToModalTwo
                    }
                ]
            }
        )
    }
    const goToModalTwo = () => {
        setCurrentModal(
            {
                modal_id: 2,
                modal_content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam repellendus sit tempore rem nihil voluptate alias nam magnam fugiat et temporibus laborum reprehenderit, quidem voluptatum qui sunt neque in aperiam impedit officiis nulla ex delectus nostrum. Id, ratione. Ratione assumenda blanditiis quaerat ipsam quo enim id, quis iste iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam repellendus sit tempore rem nihil voluptate alias nam magnam fugiat et temporibus laborum reprehenderit, quidem voluptatum qui sunt neque in aperiam impedit officiis nulla ex delectus nostrum. Id, ratione. Ratione assumenda blanditiis quaerat ipsam quo enim id, quis iste iusto!",
                modal_buttons: [
                    {
                        id: 1,
                        label: "Previous",
                        style: "btn-secondary-enabled",
                        onClickFunc: goToModalOne
                    },{
                        id: 2,
                        label: "Go To The Exercise",
                        style: "btn-primay-enabled",
                        onClickFunc: sortFunc()
                    }
                ]
            }
        )
    }

    const [currentModal, setCurrentModal] = useState(
        {
            modal_id: 1,
            modal_content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam repellendus sit tempore rem nihil voluptate alias nam magnam fugiat et temporibus laborum reprehenderit, quidem voluptatum qui sunt neque in aperiam impedit officiis nulla ex delectus nostrum. Id, ratione. Ratione assumenda blanditiis quaerat ipsam quo enim id, quis iste iusto!",
            modal_buttons: [
                {
                    id: 1,
                    label: "Next",
                    style: "btn-primay-enabled anchored-bottom",
                    onClickFunc: goToModalTwo
                }
            ]
        }
    );

    return (
        <div className={props.style}>
            <div className="container">
                <div className="modal-nav">
                    <img src={Close} onClick={props.onCloseFunc} />
                </div>

                <div className="modal-body">
                    <p>{currentModal.modal_content}</p>
                </div>
                
                <div className="modal-bottom-nav">
                    {currentModal.modal_buttons.map((button) => {
                        return (
                            <Button
                                label={button.label}
                                style={button.style}
                                key={button.id}
                                onClickFunc={button.onClickFunc}
                            />
                        )
                    })}                
                </div>
            </div>            
        </div>
    )
}

export default ModalFull;