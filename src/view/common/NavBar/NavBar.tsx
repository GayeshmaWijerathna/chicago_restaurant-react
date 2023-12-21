import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../Images/logo.png"
export class NavBar extends Component {
    render() {
        return (
            <>
                <div className="p-2 bg-[#444544] flex justify-between ">
                    <div className="flex">
                        <h1 className="font-bold text-center text-white text-4xl pt-2 pb-2" >Chicago Restaurant</h1>
                        <img className="h-22 w-16 ml-1 pt-1" src={logo} alt="logo"/>
                    </div>


                    <ul className="list-none space-x-4 pt-5 text-2xl">
                        <li className="inline-block mr-2 text-[13] text-white hover:text-green-400">
                            <Link to="/">Home</Link></li>
                        <li className="inline-block mr-2 text-[13] text-white hover:text-green-400">
                            <Link to="/contact">Contact</Link></li>
                        <li className="inline-block mr-2 text-[13] text-white hover:text-green-400">
                            <Link to="/about">About</Link></li>
                    </ul>
                    <button className="text-[20px] text-white bg-green-300 pl-3 pr-3 hover:text-black"><Link to="/login">Sign in</Link></button>

                </div>
            </>
        );
    }
}