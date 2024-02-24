"use client"
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white py-12 relative bottom-0 w-full">

           
                <ul className="flex items-center justify-center gap-15 md:gap-30 mb-10 md:mb-20">
                    <li className="transition-colors duration-300 cursor-pointer text-xs md:text-base hover:text-pink">Terms Of Use</li>
                    <li className="transition-colors duration-300 cursor-pointer text-xs md:text-base hover:text-pink">Privacy-Policy</li>
                    <li className="transition-colors duration-300 cursor-pointer text-xs md:text-base hover:text-pink">About</li>
                    <li className="transition-colors duration-300 cursor-pointer text-xs md:text-base hover:text-pink">Blog</li>
                    <li className="transition-colors duration-300 cursor-pointer text-xs md:text-base hover:text-pink">FAQ</li>
                </ul>
                <div className="text-xs opacity-50 text-center md:text-base mb-10 md:mb-30 max-w-800px md:pr-20 md:pl-20 pr-8 pl-8 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="flex items-center justify-center gap-10">
                    <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-pink hover:text-pink">
                        <FaFacebookF />
                    </span>
                    <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-pink hover:text-pink">
                        <FaInstagram />
                    </span>
                    <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-pink hover:text-pink">
                        <FaTwitter />
                    </span>
                    <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-pink hover:text-pink">
                        <FaLinkedin />
                    </span>
                </div>
          
        </footer>
    );
};

export default Footer;