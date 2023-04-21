import React, { useState, useEffect } from "react";
import {Track} from "../component/Track";

export const Queue = () => {
    const [queue, setQueue] = useState([]);

    useEffect(()=> {
        console.log("Queue useEffect")
        async function getQueue() {
            const connQueue = await fetch("http://localhost:8080/queue/", {
                method: "GET"
            });
            const dataQueue = await connQueue.json();
            setQueue(dataQueue)
        }
        getQueue();
    }, [])
    
    return (
        <>
            <ul className="flex flex-col gap-8">
                {queue !== "" ? queue.map((trackInfo) => (
                    <Track key={trackInfo.id} {...trackInfo} />
                )) : "Chould not get track"}
            </ul>
        </>
    )
}