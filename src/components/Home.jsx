import React from 'react';
import { ReactTyped } from 'react-typed';
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";



function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-14 md:my-20'>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-8 md:mt-20 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome to my portfolio!</span><br></br>
                        <span className="text-x">Hello, It's me</span>
                        <br></br>
                        {/* <span className='text-xl text-purple-700 font-semibold animate-color-change'> Subhadip De</span> */}
                        <span className="text-xl font-semibold bg-gradient-to-r from-purple-700/60 via-yellow-700/60 to-purple-600/80 bg-[length:200%] bg-clip-text text-transparent animate-gradient-flow">
                            Subhadip De
                        </span>




                        <div className="text-2xl sm:text-4xl md:text-4xl font-semibold flex flex-wrap items-center gap-x-2 mt-4">
                            <span>I'm a</span>
                            <ReactTyped
                                className="text-red-700"
                                strings={["Developer", "Programmer", "UI/UX Designer", "Coder"]}
                                typeSpeed={70}
                                backSpeed={40}
                                loop
                            />
                        </div>


                        <p className="text-sd md:text-md text-justify mt-4">
                            I am a passionate and enthusiastic aspiring software developer with a
                            strong interest in building efficient, user-friendly, and impactful digital solutions.
                            As a graduate, I bring a solid foundation in programming and a deep curiosity to explore new technologies.
                            I believe in continuous learning, teamwork, and the power of innovation to solve real-world problems.
                            This portfolio showcases my projects, skills, and journey as I begin my career in the dynamic world of software development.
                        </p>

                        {/* Social and CV */}
                        <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-10
                    md:space-y-0 ">
                            <div className="order-2 md:order-1">
                                <h1 className="font-bold mb-2 mt-5 ml-3.5 md:ml-0">Upskilling on</h1>
                                {/* <ul className="flex space-x-3">
                                    <a href='https://www.facebook.com/subhadip.de.944' target="_blank">
                                        <li className="hover:scale-110"><FaFacebookSquare className="text-2xl cursor-pointer hover:text-blue-600" />
                                        </li></a>
                                    <a href='https://www.instagram.com/_subhadip_de_09' target='_blank'>
                                        <li className="hover:scale-110"><FaSquareInstagram className="text-2xl cursor-pointer hover:text-pink-500" /></li>
                                    </a>
                                    <a href='https://x.com/Subhadip_de1854' target='_blank'>
                                        <li className="hover:scale-110"><FaSquareXTwitter className="text-2xl cursor-pointer hover:text-black-500" /></li>
                                    </a>
                                    <a href='https://www.linkedin.com/in/subhadip-de-80492a323' target='_blank'>
                                        <li className="hover:scale-110"><FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700" /></li>
                                    </a>
                                </ul> */}
                                <ul className="flex space-x-3">
                                    <li className="hover:scale-110">
                                        <TbBrandJavascript className="text-2xl cursor-pointer" />
                                    </li>
                                    <li className="hover:scale-110">
                                        <FaReact className="text-2xl cursor-pointer" />
                                    </li>
                                    <li className="hover:scale-110">
                                        <BiLogoSpringBoot className="text-2xl cursor-pointer" />
                                    </li>
                                    <li className="hover:scale-110">
                                        <SiSpringboot className="text-2xl cursor-pointer" />
                                    </li>

                                </ul>

                            </div>
                            <div className=" mt-5 md:pt-7 order-1">
                                <a
                                    href="/Subhadip_De_CV.pdf"
                                    download="Subhadip_De_CV"
                                    className="px-4 py-2 border border-red-700 text-red-700 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className=" md:w-1/2 flex md:justify-center md:items-center md:ml-10 order-1 md:mt-10">
                        <img src="/profile.png" alt="Profile" className="md:w-[300px] md:h-[450px] object-cover" />
                    </div>
                </div>
            </div>
            <br></br>
            <div className='md:mt-10'>
                <hr />
            </div>
        </>
    );
}

export default Home;
