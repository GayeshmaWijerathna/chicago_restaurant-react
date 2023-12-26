import {Component} from "react";

export class About extends Component {
    render() {
        return (
            <>
                <h1 className="text-center border-black text-6xl mb-6 mt-5 underline ">About Us</h1>
                <div className="ml-12 mr-12 space-x-2 space-y-4 text-[18px] text-justify mb-32">


                    <p className="mt-5 text-center text-2xl">
                        <b>Welcome to Chicago Restaurant, your ultimate destination for delectable chicken delights in
                            the heart of Galle! As the proud purveyors of mouthwatering chicken delicacies, we have
                            earned our reputation as the go-to spot for chicken lovers in the area.
                        </b></p>
                    <p>Our claim to fame? The irresistible Fried Chicken Wings that have become synonymous with Chicago
                        Restaurant. Each bite is a crispy and flavorful experience that keeps our patrons coming back
                        for more. But that's not all – our menu boasts a tempting array of options, from succulent
                        Drumsticks and savory Legs to the unique and delicious Chicken Mini Submarine.

                        If you're in the mood for something heartier, explore our diverse offerings, including fragrant
                        Rice dishes, flavorful Kottu, and an array of fast-food favorites. And for those who crave the
                        smoky goodness of barbecue, our BBQ items are sure to satisfy your cravings.

                        <br/><br/>
                        At Chicago Restaurant, we take pride in being more than just a restaurant – we are a culinary
                        destination where the aroma of spices and the sizzle of our signature dishes create an
                        atmosphere of pure delight. Join us on a gastronomic journey where every meal is a celebration
                        of flavors and quality.

                        Whether you're a local or a visitor, Chicago Restaurant is the place to be for an unforgettable
                        dining experience. Come and savor the taste that has made us a beloved institution in Galle –
                        where chicken reigns supreme, and every dish is crafted with passion and perfection.

                    </p>
                </div>

                {/*Mission*/}
                <div className="ml-24 text-left ">
                    <div className=" mt-20 text-4xl">Our Mission
                    </div>
                    <h2 className="text-2xl mt-5">
                        <i>We Are Hope to give our Customers Hungry...</i>
                    </h2>
                </div>

                {/*Vision*/}
                <div className="ml-24 text-left ">
                    <div className=" mt-16 text-4xl">Our Vision
                    </div>
                    <h2 className="text-2xl mt-5 mb-32">
                        <i>We Are Hope to give our Customers Hungry...</i>
                    </h2>
                </div>

                <div className="ml-24 text-4xl justify-center text-center mb-2 text-red-500 mr-24 bg-yellow-400"> <b> Our Special Offers</b></div>
                <div className="bg-gray-400 pb-96 m-2"></div>
            </>
        );
    }
}