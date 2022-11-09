import React from "react";
import {Outlet, Navigate} from "react-router-dom";

function PrivateComponent() {

    const auth = localStorage.getItem('username');

    return auth ? <Outlet /> : <Navigate to="/register" /> ;
}

export default PrivateComponent;