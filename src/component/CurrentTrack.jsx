import React, { useState, useEffect } from "react";
import { Track } from "../component/Track"

export const CurrentTrack = () => {
    const [state, setState] = useState({});

    useEffect(()=> {
        async function getState() {
            const promise = await fetch(`${process.env.REACT_APP_SERVER_URL}/player/state`, {
                method: "GET"
            });
            const response = await promise.json();
            setState(response)
        }
        getState();
    }, [])
    
    return (
        <>
            {/* {state ? <Track key={state.id} {...state.track} /> : null} */}
            <Track key={state.id} {...state.track} />
        </>
    )
}