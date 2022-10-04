import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Tag from "../components/Tag";
import ModalFull from "../components/ModalFull";

import Img from "../assets/imgs/Img.png";
import Timer from "../assets/icons/timer.svg";
import Tool from "../assets/icons/tool.svg";
import Listen from "../assets/icons/listen.svg"

const Intro1 = () => {

    let navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalState, setModalState] = useState({
        style: "modal-full modal-down"
    });

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

    const button = {
        label: "Start",
        style: "btn-primay-enabled"
    }
    const buttonSecondary = {
        label: "Why Do This?",
        style: "btn-secondary-enabled"
    }

    const tags = [
        {
            id: 1,
            icon: Listen,
            label: "Listen"
        },{
            id: 2,
            icon: Timer,
            label: "13 min"
        }
    ]

    return (
        <div className="frame no-scrollbar overflow-hidden">
            <Navbar onClickFunc={() => navigate(-1)} />
            <div className="container nav-padding padding-bottom">
                <h1 className="tool-title">Muscle Relaxation</h1>
                <img src={Img} className="cover-img" />
                <div className="tags">
                    {tags.map((tag)=> {
                        return (
                            <Tag
                                key= {tag.id}
                                icon={tag.icon}
                                label={tag.label}
                            />
                        )
                    })}
                </div>
                <p className="intro-text">Relaxing your muscles is also a helpful way to relax your mind and feel more calm.</p>
                
            </div>
            <div className="fixed-bottom-double">
                <Button label={buttonSecondary.label} style={buttonSecondary.style} onClickFunc={openModal} />
                <Button label={button.label} style={button.style} onClickFunc={() => navigate("/exercise")} />
            </div>

            <ModalFull style={modalState.style} onCloseFunc={closeModal} modalState={modalOpen} />
        </div>
    )
}

export default Intro1;