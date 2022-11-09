import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/backend/Signup";
import Login from "./components/backend/Login";
import Nav from "./components/backend/Nav";
import Dashboard from "./components/backend/Dashboard";
import PrivateComponent from "./components/backend/PrivateComponent";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}>
                        Login
                    </Route>
                    <Route path="/register" element={<Signup />}>
                        Signup
                    </Route>

                    <Route element={<PrivateComponent />}>
                      <Route path="/dashboard" element={<Dashboard />}>
                          Signup
                      </Route>
                    </Route>
                      
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
