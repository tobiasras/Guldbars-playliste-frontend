import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FrontpagePage from "./pages/frontpagePage";
import AdminPage from "./pages/adminPage";
import InfoPage from "./pages/infoPage/infoPage";
import AddSongPage from "./pages/addSongPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<FrontpagePage/>}/>
                    <Route path="admin" element={<AdminPage/>}/>
                    <Route path="addSong" element={<AddSongPage/>}></Route>
                <Route path="info" element={<InfoPage/>}/>
            </Route>
        </Routes>
</BrowserRouter>
)
    ;
}

export default App;
