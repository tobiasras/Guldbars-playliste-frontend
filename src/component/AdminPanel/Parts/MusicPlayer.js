import {play, next, previous, pause,  musicState} from "./musicController";
import {useEffect, useState} from "react";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        musicState().then(response => response).then(result => {
            console.log(result)
        })
    }, [])


    return (
        <div className="w-full bg-neutral-700 rounded flex justify-around p-3">
            <button type="button" onClick={previous}
                    className="text-gray-500 bg-neutral-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg pt-2 sm:w-auto px-5  text-center ">
                <span className="material-symbols-outlined p-0 m-0">
                    first_page
                </span>
            </button>
            <button type="button" onClick={play}
                    className="text-gray-500 bg-neutral-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg pt-2 sm:w-auto px-5 text-center ">
                <span className="material-symbols-outlined p-0  m-0">
                    play_arrow
                </span>
            </button>
            <button type="button" onClick={next}
                    className="text-gray-500 bg-neutral-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg pt-2 sm:w-auto px-5  text-center ">
                <span className="material-symbols-outlined p-0  m-0">
                     last_page
                </span>
            </button>
        </div>
    )
}
export default MusicPlayer