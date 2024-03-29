import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../Images/logo.png"

export class NavBar extends Component {
    render() {
        return (
            <>
                <div className="p-2 bg-black flex justify-between ">
                    <div className="flex">
                        <h1 className="font-bold text-center text-white text-4xl pt-2 pb-2">Chicago Restaurant</h1>
                        <img className="h-16 w-20 ml-6 pt-1" src={logo} alt="logo"/>
                    </div>

                    <ul className="list-none space-x-6 pr-16 pt-5 text-2xl">
                        <li className="inline-block mr-1 text-[13] hover:border-b text-white  hover:text-orange-600">
                            <Link to="/">Home</Link></li>
                        <li className="inline-block mr-2 text-[13] hover:border-b text-white hover:text-orange-600">
                            <Link to="/menu">Menu</Link></li>
                        <li className="inline-block mr-2 text-[13] hover:border-b text-white hover:text-orange-600">
                            <Link to="/about">About</Link></li>
                        <li className="inline-block mr-2 text-[13] hover:border-b text-white hover:text-orange-600">
                            <Link to="/contact">Contact</Link></li>
                        <li className="inline-block mr-2 text-[13] hover:border-b text-white hover:text-orange-600">
                            <Link to="/shoppingCart">My Cart</Link></li>
                    </ul>
                    <Link to="/login">
                        <button
                            className="text-[20px] mt-3 mr-3 text-white hover:text-black bg-orange-600 pl-3 pr-3 hover:bg-yellow-400 rounded-full">Sign
                            in
                        </button>
                    </Link>

                </div>
            </>
        );
    }
}
