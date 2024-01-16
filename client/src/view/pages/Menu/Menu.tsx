import {Product} from "../../common/Products/Product";
import React, {Component} from "react";
import axios from "axios";

export class Menu extends Component {
    private api: any;
    constructor(props:{} | Readonly<{}>) {
        super(props);
        this.api=axios.create({baseURL:`http://localhost:4000`})
        this.state={ data:[] }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData= async ()=>{
        try {

            // const response =await fetch("./product-data.json");
            // const jsonData =await response.json();

            this.api.get("products/all").then((res:{data:any})=>{
                const jsonData=res.data;
                this.setState({data: jsonData})
            }).catch((error:any)=>{
                console.error('Error Axios data',error)
            });
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
