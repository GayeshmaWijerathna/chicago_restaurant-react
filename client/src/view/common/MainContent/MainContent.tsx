import React, {Component} from "react";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {Route, Routes} from "react-router-dom";
import {Menu} from "../../pages/Menu/Menu";
import {ModifyCart} from "../ModifyCart/ModifyCart";
import {ShoppingCart} from "../../pages/ShopingCart/ShoppingCart";

export class MainContent extends Component {
    render() {
        return (
            <div className="">

                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/menu" Component={Menu}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/shoppingCart" element={<ShoppingCart itemList={ModifyCart.itemList}/> }> </Route>
                </Routes>

            </div>

        );
    }
}
