import React, {Component} from "react";

import hero from "../../../Images/hero-bg.jpg"
import '../../../App.css';
import {Link} from "react-router-dom";
export class Home extends Component {


    render() {
        const textStyle = {
            backgroundImage: `url(${hero})`,
            backgroundSize: 'cover', // Adjust as needed
            // backgroundPosition: 'center', // Adjust as needed
            color: 'white', // Set text color to contrast with the background image
            padding: '30px', // Add padding as needed
        };



        return (
            <div className="flex bg-gray-900">
                <div className="flex mt-5 flex-wrap justify-center items-center mx-auto">
                    <div style={textStyle}>
                        <h2 className="text-8xl  mb-10 font-bold text-center animate-pulse">Welcome to Chicago!</h2>

                        {/*<img src={hero} alt="Main Image"/>*/}

                        <p className="mt-5  mr-52  text-[18px]">
                            Welcome to 'Dewata Chicken Kade', your ultimate destination for delectable chicken delights in the heart of Galle!
                            <br/> As the proud purveyors of mouthwatering chicken delicacies, we have earned our reputation <br/> as the go-to spot for chicken lovers in the area.
                        </p>
                        <p className="mt-5 mb-24 mr-52  text-[18px]">Whether you're a local or a visitor, Dewata Chicken Kade is the place to be for an unforgettable dining experience. <br/> Come and savor the taste that has made us a
                            beloved Restaurant in Galle.</p>




                        <div className="mb-64 bg-orange-600 w-52 h-16 ml-20 pt-3 hover:bg-blue-100 hover:text-red-600 animate-bounce text-center text-3xl rounded-lg " > <button> <Link to="/menu">Order Now</Link> </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}