import React, {Component} from "react";
import background from "../../../Images/Background1.jpg"
import image1 from "../../../Images/menu/Chicago Combo.png"
import image2 from "../../../Images/menu/Wings.png"
import image3 from "../../../Images/menu/Drumstick.png"
import image4 from "../../../Images/menu/MiniSubmarine.png"
import image5 from "../../../Images/menu/img.png"
import {Link} from "react-router-dom";

export class About extends Component {
    render() {
        const aboutBackground = {
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            color: 'white',
            padding: '10px',
        };
        return (
            <div style={aboutBackground}>
                <div className="bg-black bg-opacity-45 w-full">
                    <h1 className="text-center border-black p-1 text-6xl  mt-5 underline ">About Us</h1>
                    <div className="ml-10 mr-10 space-x-2 space-y-4 text-[18px] text-justify mb-16  ">


                        <p className="mt-5 text-center text-2xl ml-36 mr-36 ">
                            <b>Welcome to Chicago Restaurant, your ultimate destination for delectable chicken delights
                                in
                                the heart of Galle! As the proud purveyors of mouthwatering chicken delicacies, we have
                                earned our reputation as the go-to spot for chicken lovers in the area...
                            </b></p>
                        <p> The irresistible Fried Chicken Wings that have become synonymous with Chicago
                            Restaurant. Each bite is a crispy and flavorful experience that keeps our patrons coming
                            back
                            for more. But that's not all – our menu boasts a tempting array of options, from succulent
                            Drumsticks and savory Legs to the unique and delicious Chicken Mini Submarine.

                            If you're in the mood for something heartier, explore our diverse offerings, including
                            fragrant
                            Rice dishes, flavorful Kottu, and an array of fast-food favorites. And for those who crave
                            the
                            smoky goodness of barbecue, our BBQ items are sure to satisfy your cravings.

                            <br/><br/>
                            At Chicago Restaurant, we take pride in being more than just a restaurant – we are a
                            culinary
                            destination where the aroma of spices and the sizzle of our signature dishes create an
                            atmosphere of pure delight. Join us on a gastronomic journey where every meal is a
                            celebration
                            of flavors and quality.

                            Whether you're a local or a visitor, Chicago Restaurant is the place to be for an
                            unforgettable
                            dining experience. Come and savor the taste that has made us a beloved institution in Galle
                            –
                            where chicken reigns supreme, and every dish is crafted with passion and perfection.

                        </p>
                    </div>
                    <div className="justify-center text-center text-3xl mb-6"></div>
                    {/*Vision*/}
                    <div className="ml-20 text-right bg-gray-700 bg-opacity-30 p-3 mr-3 rounded-r-full">
                        <div className="mt-5 text-4xl mr-16   font-bold border-r-8 border-red-700"> Vision
                        </div>
                        <h2 className="text-2xl mt-3 text-justify mr-24 mb-6 ">
                            <i>"Our vision is to be the unrivaled destination for chicken
                                enthusiasts, setting the standard for exceptional taste, quality, and dining experience.
                                We
                                aspire to be more than a restaurant; we aim to create a culinary haven where the love
                                for
                                chicken meets innovation, and every customer leaves with a satisfied smile. Through our
                                dedication to excellence, we envision becoming a cherished part of the Galle community
                                and
                                beyond, a place where the joy of flavorful chicken creations brings people
                                together."</i>
                        </h2>
                    </div>

                    {/*Mission*/}
                    <div className="ml-16 mt-4 bg-teal-800 bg-opacity-50 text-justify p-3 rounded-l-full mr-3">
                        <div className=" mt-5 text-4xl ml-16  font-bold border-l-8 border-red-700 "> Mission
                        </div>
                        <h2 className="text-2xl ml-24 mt-5 mr-3 mb-6">
                            <i>"Our mission is to delight our customers with a diverse and delectable menu of chicken
                                delicacies, prepared with passion, precision, and the finest ingredients. We are
                                committed
                                to delivering an unparalleled dining experience, marked by friendly service, a warm
                                ambiance, and consistently delicious offerings. We strive to continuously e,
                                introducing new and exciting flavors to our menu while maintaining the hi andards of
                                quality. As a responsible member of the community, we aim to contribute p y to the
                                local food scene, fostering a sense of satisfaction and joy among our pat r mission
                                is to be more than a restaurant; it's to be a culinary destination where sit is a
                                celebration of great taste and memorable moments."</i>
                        </h2>
                    </div>


                    <div
                        className="ml-56 mr-56 mt-5 text-4xl justify-center text-center mb-2 text-fuchsia-200  underline ">
                        <b>Our Famous Meals </b></div>
                    <div className="mt-5 bg-yellow-400 bg-opacity-25 pb-5  m-2">

                        <div className="flex justify-center">


                            <div className="w-80 h-auto ">
                                <img src={image2} alt="Image1"/>
                                <h2 className="text-center text-3xl">Crispy Chicken Wing</h2>
   </div>

                            <div className="w-80 h-auto  ">
                                <img src={image3} alt="Image2"/>
                                <h2 className="text-center text-3xl">Crispy Chicken Drumstick</h2>

                            </div>

                            <div className="w-80 h-auto">
                                <img src={image1} alt="Image3"/>
                                <h2 className="text-center text-3xl">Combo Special I</h2>

                            </div>

                            <div className="w-80 h-auto  ">
                                <img src={image4} alt="Image4"/>
                                <h2 className="text-center text-3xl">Mini Crispy Chicken Submarine</h2>

                            </div>

                            <div className="w-80 h-auto  ">
                                <img src={image5} alt="Image5"/>
                                <h2 className="text-center text-3xl">BBQ Chicken Leg</h2>

                            </div>
                        </div>

                        <div
                            className="  bg-red-600 m-2 ml-16 mr-16  hover:bg-yellow-500 hover:text-black text-center text-2xl rounded-lg ">
                            <Link to="/menu">
                                <div>
                                    <button> View Menu</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}