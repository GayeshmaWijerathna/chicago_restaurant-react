import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export class Login extends Component {
    state = {
        username: '',
        password: '',
        error: ''
    };

    // @ts-ignore
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // @ts-ignore
    handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        if (username === 'admin' && password === 'admin12') {
            // Redirect to admin page
            // @ts-ignore
            window.location.href = '/admin';
        } else {
            this.setState({ error: 'Invalid credentials' });
        }
    }

    render() {

        // @ts-ignore
        return (
            <div className="flex flex-wrap h-screen justify-center items-center bg-cover bg-center bg-no-repeat">
                <div className="h-auto mt-4 mb-4 p-8 mx-auto border-white border rounded-2xl bg-gray-800 bg-opacity-50 w-full max-w-md">
                    <h2 className="pt-2 pb-2 text-3xl underline decoration-2 text-white mb-9 text-center">Log In</h2>
                    {this.state.error && <p className="text-red-500 text-center">{this.state.error}</p>}
                    <form onSubmit={this.handleSubmit} className="space-y-6 font-serif">
                        <div>
                            <label className="block text-sm font-bold text-white mb-1">User Name:</label>
                            <input
                                name="username"
                                className="w-full p-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                type="text"
                                required
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-white mb-1">Password:</label>
                            <input
                                name="password"
                                className="w-full p-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                type="password"
                                required
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-secondary text-[15px] p-[10px] rounded-3xl hover:bg-green-500 text-white font-bold">
                                Log In
                            </button>
                        </div>
                        <div className="pt-3 text-center">
                            <Link className="text-white flex items-center justify-center" to="/">
                                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                                Back to Home
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
