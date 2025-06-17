import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <footer className='py-10 bg-gray-700'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className="text-white font-semibold mb-2 mt-2 ml-3.5 md:ml-0">Available on</h1>
                        <ul className="flex space-x-3 mt-2 text-white">
                            <a href='https://www.facebook.com/subhadip.de.944' target="_blank">
                                <li className="hover:scale-105"><FaFacebookSquare className="text-2xl cursor-pointer hover:text-blue-600 hover:bg-white" />
                                </li></a>
                            <a href='https://www.instagram.com/_subhadip_de_09' target='_blank'>
                                <li className="hover:scale-105"><FaSquareInstagram className="text-2xl cursor-pointer hover:text-pink-500 hover:bg-white" /></li>
                            </a><a href='https://github.com/subhadipde09' target='_blank'>
                                <li className="hover:scale-105"><SiGithub className="text-2xl cursor-pointer hover:text-teal-600 hover:bg-white" /></li>
                            </a>
                            <a href='https://x.com/Subhadip_de1854' target='_blank'>
                                <li className="hover:scale-105"><FaSquareXTwitter className="text-2xl cursor-pointer hover:text-black hover:bg-white" /></li>
                            </a>
                            <a href='https://www.linkedin.com/in/subhadip-de-80492a323' target='_blank'>
                                <li className="hover:scale-105"><FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700 hover:bg-white" /></li>
                            </a>
                        </ul>

                    </div>
                    <div className=' flex flex-col items-center mt-4'>
                        <div className='border-t border-white-700 text-center'>
                            <p className='mt-4 text-white text-sm justify-center'>
                                &copy;2025 Your company. All rights reserved.
                                <br></br>
                                Made by &hearts; Subhadip De
                            </p>
                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer