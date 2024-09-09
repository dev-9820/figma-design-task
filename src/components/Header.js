import React from 'react';
import logo from '../images/logo.png';


const Header = () => {
    return (
        <header className="bg-white shadow-lg p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="pl-32"><img className="w-12 transition-all hover:hue-rotate-60" src={logo} alt="Logo"/></div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#home" className="text-gray-800 hover:underline underline-offset-2 py-2">
                        Home
                    </a>
                    <a href="#about" className="text-gray-800 py-2 hover:underline underline-offset-2">
                        About Us
                    </a>
                    <a href="#contact" className="text-gray-800 py-2 hover:underline underline-offset-2">
                        Contact Us
                    </a>
                    <a href="#blogs" className="text-gray-800 py-2 hover:underline underline-offset-2">
                        Blogs
                    </a>
                </nav>
                <button className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-2xl hover:bg-green-800 hover:shadow-md shadow-sm transition-all mr-32">
                    Donate
                </button>
            </div>
        </header>
    );
};

export default Header;
