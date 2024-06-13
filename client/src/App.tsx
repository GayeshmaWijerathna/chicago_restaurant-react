import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Login} from "./view/pages/Login/Login";
import {Register} from "./view/pages/Login/Register";
import {AdminPage} from "./view/pages/Admin/AdminPage";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={DefaultLayout} > </Route>
                <Route path="/login" Component={Login}> </Route>
                <Route path="/register" Component={Register}> </Route>
                <Route path="/admin" Component={AdminPage}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
