import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavbarIcons from "../components/NavbarIcons";
import Button from "../components/Button";
import Audio from "../assets/audios/Beach.mp3";
import ModalFull from "../components/ModalFull";

const Exercise = () => {

    let navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalState, setModalState] = useState({
        style: "modal-full modal-down"
    });

    const [audioIsPlaying, setAudioIsPlaying] = useState(false);
    const [audioHasEnded, setAudioHasEnded] = useState(false);
    const [userWantCommands, setUserWantCommands] = useState(true);
    const [button, setButton] = useState({
        label: "Done",
        style: "btn-primay-disabled anchored-bottom"
    });

    const handlePlaying = (e) => {
        setAudioIsPlaying(true);
        setTimeout(()=>{setUserWantCommands(false)},120);
        //console.log(e);
    }
    const handlePause = (e) => {
        setAudioIsPlaying(false);
        setUserWantCommands(true);
        //console.log(e);
    }
    const handleEnd = (e) => {
        setAudioHasEnded(true);
        setUserWantCommands(true);
        //console.log(e);
    }

    const handleClick = () => {
        if (audioIsPlaying) {
            if ( !userWantCommands ) {
                setUserWantCommands(true);
            } else {
                setUserWantCommands(false);
            }
        }        
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

    useEffect(()=>{
        if ( audioHasEnded == true ) {
            setButton(
                {
                    label: "Done",
                    style: "btn-primay-enabled-white anchored-bottom",
                    disabled: false
                }
            );        
        } else if ( audioHasEnded == false ) {
            setButton(
                {
                    label: "Done",
                    style: "btn-primay-enabled-white anchored-bottom",
                    disabled: false
                }
            )        
        }
    },[audioHasEnded]);

    const buttonAway = {
        label: "Done",
        style: "btn-primay-enabled anchored-bottom btn-away"
    }
    const topbarAway = {
        style: "nav-main nav-transparent topbar-away"
    }

    return (
        <div className="frame bg-seaside overflow-hidden" onClick={handleClick}>
            <NavbarIcons style={audioIsPlaying ? topbarAway.style : "nav-main nav-transparent"} onClickFunc={() => navigate(-1)} onOpenModal={openModal} />
            <div className="container nav-padding">
                <h1 className={audioIsPlaying ? `tool-title text-white opacity-null` : `tool-title text-white opacity-full`}>Muscle Relaxation</h1>   
                <audio className={userWantCommands ? "audio" : "commands-down"}
                    controls
                    src={Audio}
                    onPlay={handlePlaying}
                    onPause={handlePause}
                    onEnded={handleEnd}
                >
                </audio>
                <Button label={button.label} style={audioIsPlaying ? buttonAway.style : button.style} disabled={button.disabled} onClickFunc={() => navigate("/congrats")} />
            </div>

            <ModalFull style={modalState.style} onCloseFunc={closeModal} />
        </div>
    )
}

export default Exercise;