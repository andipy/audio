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
                modal_content: 'This listening exercise is for practicing guided mindfulness. Mindfulness practice has a number of benefits, but for starters, we know that it reduces stress and helps people feel more grounded. Sometimes our minds are leaping around from one thought to the next and we have trouble slowing them down and staying focused. Some kinds of mind wandering, like worry, can lead to suffering. Mindfulness is a remedy for that suffering. Mindfulness means paying attention, on purpose, to the present moment without judgement. In mindfulness practice, you bring focused awareness to the present moment and notice sensations, thoughts or feelings without clinging to them, resisting them, or trying to change them.',
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
                modal_content: 'Mindfulness practice can help you to: Be more aware of your mind and the ongoing process of thinking, gently noticing and observing all the brain chatter without any need to react to it. Cultivate calmness in the presence of unhelpful thoughts and challenging feelings. Feel less stress, worry, or rumination. Be less reactive and more flexible in your approach to life. Experience improvement in physical health and quality of life.',
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
            modal_content: "This listening exercise is for practicing guided mindfulness. Mindfulness practice has a number of benefits, but for starters, we know that it reduces stress and helps people feel more grounded. Sometimes our minds are leaping around from one thought to the next and we have trouble slowing them down and staying focused. Some kinds of mind wandering, like worry, can lead to suffering. Mindfulness is a remedy for that suffering. Mindfulness means paying attention, on purpose, to the present moment without judgement. In mindfulness practice, you bring focused awareness to the present moment and notice sensations, thoughts or feelings without clinging to them, resisting them, or trying to change them.",
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