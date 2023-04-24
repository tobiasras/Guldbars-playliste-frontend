import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
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
            {queue.message !== "Bad or expired token" ? (
                <ul className="flex flex-col gap-8">
                {queue !== "" ? queue.map((trackInfo) => (
                    <Track key={trackInfo.id} {...trackInfo} />
                )) : "Chould not get track"}
                </ul>) : 
                (<ul className="">
                    You need to <Link to="/admin" className="underline">login</Link>
                </ul>)  
            }     
        </>
    )
}