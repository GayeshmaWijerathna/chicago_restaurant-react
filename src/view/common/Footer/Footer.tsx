import {Component} from "react";
import logo from "../../../Images/logo.png"


export class Footer extends Component {
    render() {
        return (
            <div className={"bg-black p-2 flex justify-center"}>
                <h1 className={"text-center text-1xl text-black"}> &copy; Copyright 2023 &nbsp;</h1>
                <h1 className={"text-center text-primary text-1xl "} >Chicago Restaurant </h1>
                <img className={"h-8 w-8"} src={logo} alt=""/>
                <h1 className={"text-center text-1xl text-black"}>. &nbsp; All Rights Reserved. </h1>
            </div>
        );
    }

}