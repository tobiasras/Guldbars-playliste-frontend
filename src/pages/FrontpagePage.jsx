import Navbar from "../component/Navbar";
import { Queue } from "../component/Queue";

const FrontpagePage = () => {

    return (
        <div className="w-screen h-full overflow-x-hidden overflow-y-scroll grid grid-cols-[1fr_minmax(0,1000px)_1fr] items-center place-content-center bg-neutral-800 text-white">
            <main className="flex flex-col col-[2/3]">
                <section>
                    <h1>Current track playing</h1>
                    <p>Working</p>
                </section>
                <section className="flex flex-col">          
                    <h2 className="text-center text-4xl mb-4">Current queue</h2>
                    <Queue/>
                </section>   

            </main>
            <Navbar/>
        </div>
    )
}

export default FrontpagePage