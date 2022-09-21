import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ModalFull from "../components/ModalFull";

import Img from "../assets/imgs/Time.png";

const Intro3 = () => {

    let navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalState, setModalState] = useState({
        style: "modal-full modal-down"
    });

    const button = {
        label: "Get Started",
        style: "btn-primay-enabled anchored-bottom"
    }
    const buttonSecondary = {
        label: "Why Do This?",
        style: "btn-secondary-enabled anchored-bottom-upper"
    }

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    useEffect(()=>{
        if (modalOpen) {
            setModalState({
                style: "modal-full modal-up"
            })
        } else {
            setModalState({
                style: "modal-full modal-down"
            })
        }
    },[modalOpen]);

    return (
        <div className="frame overflow-hidden">
            <Navbar onClickFunc={() => navigate(-1)} />
            <div className="container nav-padding">
                <div>
                    <img src={Img} className="icon-img" />
                </div>                
                <p className="intro-text">It’s gonna take around 6 minutes to complete.</p>
                <Button label={buttonSecondary.label} style={buttonSecondary.style} onClickFunc={openModal} />
                <Button label={button.label} style={button.style} onClickFunc={() => navigate("/exercise")} />
            </div>

            <ModalFull style={modalState.style} onCloseFunc={closeModal} modalState={modalOpen} />
            
        </div>
    )
}

export default Intro3;