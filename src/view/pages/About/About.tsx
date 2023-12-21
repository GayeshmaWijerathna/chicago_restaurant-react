import {Component} from "react";

export class About extends Component {
    render() {
        return (
            <>
                <h1 className="text-center border-black bg-red-500" >About Us</h1>
                <p>We are Lorem ipsum dolor sit amet,
                    <br/> consectetur adipisicing elit. Aliquam dolorem eligendi esse eum id ipsam
                    <br/>ipsum iusto, magni modi molestiae natus pariatur <br/>
                    quaerat quasi ratione reiciendis repellendus saepe tempora vitae.</p>
            </>
        );
    }
}