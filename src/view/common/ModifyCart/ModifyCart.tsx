import {Component} from "react";
import {CartItem} from "../../../model/CartItem";


interface ModifyCartProps {
    data:any
}

interface ModifyCartState {
    itemCount:number
}

export class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {

    public static itemList:CartItem[]=[];


    constructor(props: ModifyCartProps) {
        super(props);
        this.state={
            itemCount:1
        }
    }


    componentDidMount() {
        const {itemCount}=this.state;
        if (this.props.data.isAdded){
            if (!ModifyCart.itemList.find(item=>item.product.id === this.props.data.product.id)){
                ModifyCart.itemList.push({
                    product:this.props.data.product,
                    itemCount:itemCount
                })
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {
        let {itemCount}=this.state;
        let item:CartItem | undefined = ModifyCart.itemList.find(item=> item.product.id === this.props.data.product.id);

        // @ts-ignore
        let index : number = ModifyCart.itemList.indexOf(item);
        ModifyCart.itemList.splice(index,1)
        ModifyCart.itemList.push({
            product:this.props.data.product,
            itemCount:itemCount
        })
    }

    render() {
        let {itemCount}=this.state
        const onDecreaseItemCount = () => {
            if (itemCount>0) {
                this.setState({itemCount: --itemCount})
            }else {
                alert("Can't be less than 0 !!")
            }
        };


        const onIncreaseItemCount = () => {
            this.setState({itemCount:++itemCount})
        };

        return (
            <>
                <div className=" w-full mt-1 P-[2.4px] text-center bg-zinc-800  ">
                    <button className="float-left font-bold text-[8] bg-yellow-400 w-8 rounded-l-lg" onClick={onDecreaseItemCount}>-</button>
                    <small className="text-[8] text-white">{itemCount}</small>
                    <button className="float-right font-bold text-[8] bg-yellow-400 rounded-r-lg w-8" onClick={onIncreaseItemCount}>+</button>
                </div>
            </>
        );
    }
}