import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {Ap} from "./pages/Main";
import {Add} from "./pages/Russia";
import {Alg} from "./pages/Algeria";
export const Routing = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path ="/" element ={<Navigate to = "/home"/>}/>
                <Route exact path ="/home" element ={<Ap/>}/>
                <Route exact path ="/russia" element ={<Add/>}/>
                <Route exact path ="/algeria" element ={<Alg/>}/>
            </Routes>
        </Router>
    )
}