import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ShoppingCartProps {
    itemList: CartItem[];
}

interface ShoppingCartState {
    total: number;
    itemList: CartItem[];
}

export class ShoppingCart extends Component<ShoppingCartProps, ShoppingCartState> {
    constructor(props: ShoppingCartProps) {
        super(props);
        this.state = {
            total: this.calculateTotal(props.itemList),
            itemList: props.itemList,
        };
    }

    calculateTotal(itemList: CartItem[]) {
        return itemList.reduce((acc, item) => acc + item.product.price * item.itemCount, 0);
    }

    render() {

        // have to add sum of total items
        // const total = this.props.itemList.reduce((acc, item) => acc + item.product.price * item.itemCount, 0);


        return (

            <div className="min-h-screen">
                <div className="flex mt-20 justify-center text-3xl font-bold">My Cart</div>

                <div className="flex justify-center items-center mt-3 min-h-0">

                    <table className="w-full mx-6">

                        <tr className="bg-gray-400">
                            <th className="text-[12px] font-bold border-black border-[0.5px] px-1 ">Item Code</th>
                            <th className="text-[12px] font-bold border-black border-[0.5px] px-1 ">Item Name</th>
                            <th className="text-[12px] font-bold border-black border-[0.5px] px-1 ">Unit Price</th>
                            <th className="text-[12px] font-bold border-black border-[0.5px] px-1 ">Quantity</th>
                            <th className="text-[12px] font-bold border-black border-[0.5px] px-1 ">Total Price</th>

                        </tr>

                        {this.state.itemList.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="border-black border-[0.5px] px-1 ">
                                    <p className="text-center text-[14px]">No Items to Show</p>
                                </td>
                            </tr>) : (
                            this.state.itemList.map((item, index) => (
                                <tr key={index} className="border-black text-center border-[0.5px] px-1 ">
                                    <td className="border-black text-[12px] border-[0.5px] px-1 ">{item.product.id} </td>
                                    <td className="border-black text-[12px] border-[0.5px] px-1 ">{item.product.name} </td>
                                    <td className="border-black text-[12px] border-[0.5px] px-1 ">{item.product.price + ' ' + item.product.currency} </td>
                                    <td className={"text-[12px] border-black border-[0.5px] px-1"}>{item.itemCount}</td>
                                    <td className={"text-[12px] border-black border-[0.5px] px-1"}>{(item.product.price * item.itemCount) + ' ' + item.product.currency}</td>
                                </tr>

                            ))

                        )}

                        {/*<tr>*/}
                        {/*    <td colSpan={5}>Total: {total}</td>*/}
                        {/*</tr>*/}

                    </table>


                </div>
                <div className="mt-12 ml-[900px] text-2xl ">
                    {/*Total Amount : {total} LKR*/}
                    Total Amount : {this.state.total} LKR
                    <button
                        className="ml-10 mt-3 mb-32 bg-green-400  w-56 h-16 pt-3 font-bold hover:bg-orange-500 hover:text-white text-2xl rounded-lg"
                        onClick={this.clickOnProceed}>
                        Proceed Payment
                    </button>
                </div>

            </div>
        );
    }

    private clickOnProceed = () => {
        alert("Payment Confirmed by COD method!");

        // Reset the total to 0 after the payment is confirmed
        // this.setState({ total: 0,  itemList: []  });

        window.location.reload();
    }

}
