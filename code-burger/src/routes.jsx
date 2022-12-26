import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login"; 
import Register from './page/Register'


function conexãoEntrePages() {

    return (

        <Router>
            <Routes>
                <Route>
                    <Route path="/" element={<Login />} />
                    <Route path="register" element={< Register />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default conexãoEntrePages;