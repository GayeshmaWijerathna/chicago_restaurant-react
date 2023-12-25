import {Component} from "react";

interface ProductProps {
    data: any
}

interface ProductState {
    isActive:boolean
}

export class Product extends Component<ProductProps, ProductState> {

    constructor(props:ProductProps) {
        super(props);
        this.state={isActive:false}
    }

    render() {

        const {data} =this.props;
        const image = require("../../../Images/menu/"+data.image)

        return (
            <>
<div className=" w-56 h-50 border-black border-[1px] mr-2 mb-2 justify-center items-center align-middle">
    <div className="h-36">
        <img className="w-52 h-32 mt-5 ml-2 mr-3" src={image} alt="Menu Image"/>
    </div>
    <div className="flex justify-end">
        <div>
            <h3 className="pt-2 pl-1 text-blue-950 font-bold text-[18px]" >{data.name}</h3>
        </div>
        <div>
            <h3 className="pt-2 text-black text-1xl bg-yellow-300 ml-4 p-[0.4] rounded-lg pr-2">
                <small>{data.currency}</small> <span className="font-bold text-2xl">{data.price}</span></h3>
        </div>
    </div>

    <div className="flex justify-center">
    <button className="w-full mt-1 P-[2.5px]  hover:bg-yellow-400 cursor-pointer  bg-green-400 text-[13px]" onClick={this.addToCartOnClick}>
        Add to Cart
    </button></div>

</div>

            </>
        );
    }

    private addToCartOnClick = () => {
        this.setState({isActive:!this.state.isActive},()=>{
            alert(this.state.isActive? this.props.data.name + " Added to Cart!" : "Failed Add to Cart")
        })
    }
}