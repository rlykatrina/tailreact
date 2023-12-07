import React, { useState } from 'react'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'

const Sign = ({ isVisible, onClose, }) => {
    if (!isVisible) return null;

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [login, setLogin] = useState("");


    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    function handleLogin() {
        const encodedPassword = btoa(login + password);
        event.preventDefault();
        console.log("Authorization: Basic:", encodedPassword);
    }

    return (
        <div className="text-black fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="md:w-[600px] w-[90%] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                <div className="violet-gradient p-2 rounded">
                    <div className="flex justify-center">
                        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                            <div>
                                <form className="bg-white rounded-md shadow-2xl p-2">
                                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                                    <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
                                    <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                        <input id="email" className="text-white pl-2 outline-none border-none" type="email" value={login} name="email" placeholder="Email Address" onChange={(e) => setLogin(e.target.value)} />
                                    </div>
                                    <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
                                        <input className="text-white pl-2 w-full outline-none border-none" type={type} name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                                        <span className="flex justify-around items-center" onClick={handleToggle}><Icon className="absolute mr-10" icon={icon} size={25} /></span>
                                    </div>
                                    <button type="submit" class="block w-full bg-purple-700 mt-5 py-2 rounded-2xl hover:bg-purple-800 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2" onClick={handleLogin}>Login</button>
                                    <div className="flex justify-between mt-4">
                                        <span className="text-sm ml-2 hover:text-purple-800 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>
                                        <a href="#" className="text-sm ml-2 hover:text-purple-800 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don't have an account yet?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sign