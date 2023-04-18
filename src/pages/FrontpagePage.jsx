import Navbar from "../component/Navbar";
import { Queue } from "../component/Queue";

const FrontpagePage = () => {


    return (
        <div className="w-screen h-full overflow-x-hidden overflow-y-scroll grid grid-cols-[1fr_minmax(0,1400px)_1fr] items-center place-content-center bg-neutral-800 text-white">
            <main className="flex justify-center col-[2/3]">
                <section>
                </section>
                <section className="flex flex-col">          
                    <h1 className="text-center text-4xl mb-4">Current queue</h1>
                    <Queue/>
                </section>   

                <Navbar/>
            </main>
        </div>
    )
}

export default FrontpagePage