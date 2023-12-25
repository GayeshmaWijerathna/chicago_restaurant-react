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
            <div className="flex ">
                <div className="flex flex-wrap justify-center items-center mx-auto">
                    <div style={textStyle}>
                        <h2 className="text-8xl  mb-10 font-bold text-center animate-pulse">Welcome to Chicago!</h2>

                        {/*<img src={hero} alt="Main Image"/>*/}

                        <p className="mt-5 mb-24 mr-52  text-[14px]">
                            Your ultimate destination for delectable chicken delights and mouth-watering fast foods in
                            the vibrant city of Galle!.  We take pride in offering a diverse and flavorful menu that
                            caters to every chicken lover's palate.

                            Indulge in the crispy perfection of our Fried Chicken Wings and succulent Drumsticks,
                            each bite a symphony of crunch and flavor. Our Chicken Legs are a juicy sensation, leaving
                            you craving for more with every savory bite. For a delightful twist, savor our Chicken Mini
                            Submarine, a delightful blend of flavors sandwiched between soft, fresh bread.

                            For those seeking a hearty meal, dive into our tempting Rice and Kottu options, expertly
                            crafted to satisfy your hunger with a burst of authentic flavors. Our fast foods selection
                            promises a quick and tasty culinary experience, perfect for those on the go.

                            And if you're in the mood for a smoky, BBQ feast, look no further! Our BBQ items are grilled
                            to perfection, delivering a mouthful of savory goodness that will leave you coming back for
                            more.

                            Discover a culinary haven at Chicago Restaurant , where we bring the best of chicken
                            delicacies to your plate. Join us for a gastronomic journey that celebrates the love of good
                            food, great company, and unforgettable flavors. <br/><br/> Visit us in Galle and experience the essence
                            of our renowned restaurant – where every dish is a celebration of taste!</p>

                        <div className="mb-72 bg-orange-600 w-52 h-16 ml-20 pt-3 hover:bg-blue-100 hover:text-red-600 animate-bounce text-center text-3xl rounded-lg " > <button> <Link to="/menu">Order Now</Link> </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}