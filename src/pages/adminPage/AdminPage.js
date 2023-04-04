import Navbar from "../../component/Navbar";
import {useEffect, useState} from "react";
import {login} from "./Login";
import AdminPanel from "../../component/AdminPanel/AdminPanel";

const AdminPage = () => {
    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === "secretkey"){
            setIsloggedIn(true)
        }
    }, [])

    const [password, setPassword] = useState('')
    const [isloggedIn, setIsloggedIn] = useState(false)
    const loginHandler = async () => {

        const response = await login(password)
        if (!response) {
            alert("Server is down")
        } else {
            if (!response?.ok) {
                alert("error in request to server")
                console.log(response)
            } else {
                setIsloggedIn(true)
                localStorage.setItem("isLoggedIn", "secretkey")
            }

        }
    }

    return (
        <div className="">
            <main className="w-full p-3">
                {!isloggedIn && <div className="text-gray-400 flex justify-center">
                    <div className="w-full bg-neutral-700 p-5 rounded">
                        <form>
                            <div className="">
                                <div className="flex justify-between">
                                    <input type="password" id="email" value={password}
                                           onChange={event => setPassword(event.target.value)}
                                           className="bg-neutral-700 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-gray-800 focus:border-gray-800 block w-7/12 p-2.5"
                                           placeholder="Secret password" required/>

                                    <button type="button" onClick={loginHandler}
                                            className="text-gray-500 bg-neutral-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-4/12 sm:w-auto px-5 py-2.5 text-center ">Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> }


                {isloggedIn && <AdminPanel/>}
            </main>


            <Navbar/>
        </div>
    )
}


export default AdminPage

/*




 */