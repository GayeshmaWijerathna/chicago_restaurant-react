import {Product} from "../../common/Products/Product";
import React, {Component} from "react";

export class Menu extends Component {
    constructor(props: Readonly<{ }>) {
        super(props);
        this.state={ data:[] }
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData= async ()=>{
        try {
            const response =await fetch("./product-data.json");
            const jsonData =await response.json();
            this.setState({data:jsonData})
        }catch (error){
            console.log("Fetching Data Not Found!!",error)
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;

        return (
            <>
                <h1 className=" text-center text-4xl text-blue-900 font-serif mt-5">Select You Choices from Our menu</h1>

                <div className="flex">
                    <div className="flex mt-5 mb-5 flex-wrap justify-center
                items-center mx-auto ">

                <div className="flex mt-5 flex-wrap justify-center items-center mx-auto">
                    {
                        data.map((product: any) => (
                            <Product key={product.id} data={product}/>
                        ))
                    }
                </div>
                    </div>
            </div>
            </>
        );
    }
}