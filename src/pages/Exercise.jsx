import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavbarIcons from "../components/NavbarIcons";
import Button from "../components/Button";
import Audio from "../assets/audios/Beach.mp3";

const Exercise = () => {

    let navigate = useNavigate();

    const [audioIsPlaying, setAudioIsPlaying] = useState(false);
    const [audioHasEnded, setAudioHasEnded] = useState(false);
    const [button, setButton] = useState({
        label: "Done",
        style: "btn-primay-disabled anchored-bottom"
    });

    const handlePlaying = (e) => {
        setAudioIsPlaying(true);     
        console.log(e);
    }
    const handlePause = (e) => {
        setAudioIsPlaying(false);       
        console.log(e);
    }
    const handleEnd = (e) => {
        setAudioHasEnded(true);
        console.log(e);
    }

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
                    style: "btn-primay-disabled anchored-bottom",
                    disabled: true
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
        <div className="frame bg-seaside">
            <NavbarIcons style={audioIsPlaying ? topbarAway.style : "nav-main nav-transparent"} onClickFunc={() => navigate(-1)} />
            <div className="container nav-padding">
                <h1 className={audioIsPlaying ? `tool-title text-white opacity-null` : `tool-title text-white opacity-full`}>Muscle Relaxation</h1>
                <figure>
                    <audio
                        controls
                        src={Audio}
                        onPlay={handlePlaying}
                        onPause={handlePause}
                        onEnded={handleEnd}
                    >
                    </audio>
                </figure>
                <Button label={button.label} style={audioIsPlaying ? buttonAway.style : button.style} disabled={button.disabled} onClickFunc={() => navigate("/congrats")} />
            </div>            
        </div>
    )
}

export default Exercise;