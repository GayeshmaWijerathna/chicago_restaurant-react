import {Component} from "react";
import logo from "../../../Images/logo.png"


export class Footer extends Component {
    render() {
        return (
            <div className={"bg-gray-200 p-2 flex justify-center"}>
                <h1 className={"text-center text-1xl text-black"}>Copyright  &copy; 2024 Chicago Restaurant. All
                    Rights Reserved. <br/> <small> Developed by Gayeshma Wijayarathna -
                        +94775569951 </small></h1>

            </div>
        );
    }

}