import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <>
                <div className="flex">

                    <div className="h-auto pt-2  pb-5 pl-10 mx-auto">
                        <div className="p-2">
                            <h2 className="text-center border-black text-6xl mb-6 mt-5 underline ">Contact Us</h2>


                        </div>
                        <form className="h-auto p-2  justify-center">
                            <div className="pb-2">
                                <label className="text-[12px]"> Your Email : </label>
                                <input className="float-right border-amber-950 border-[1px] text-1xl" type="email"/>
                            </div>
                            <div className="pb-2">
                                <label className="text-[12px]"> Title : </label>
                                <input className="float-right border-amber-950 border-[1px] text-1xl" type="text"/>
                            </div>
                            <div>
                                <label className="text-[12px]"> Message : </label>
                                <textarea className="float-right border-amber-950 border-[1px] w-52 "/>
                            </div>
                            <div className="mt-10">
                                <button
                                    className=" ml-60 text-white hover:bg-green-400 rounded-b text-1xl h-8 w-16 bg-emerald-800 "
                                    type="button">Send
                                </button>
                            </div>

                        </form>


                    </div>


                </div>
            </>
        );
    }
}