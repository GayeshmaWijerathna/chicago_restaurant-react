import React, {Component} from "react";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {Route, Routes} from "react-router-dom";

export class MainContent extends Component {
    render() {
        return (
            <div className="">

                {/*<h1 className="bg-blue-100 text-center text-3xl">This is main content</h1>*/}
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>

            </div>

        );
    }
}