import React from 'react';
import { ReactTyped } from 'react-typed';
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { useEffect, useState } from "react";



function Home() {
    const [message, setMessage] = useState(null);
    const [showBanner, setShowBanner] = useState(false);

    // ✅ Define this first so it's available in useEffect
    const handleCopyLink = () => {
        const link = "https://subhadipde01.netlify.app";
        navigator.clipboard.writeText(link).then(() => {
            alert("✅ Link copied! Open Chrome and paste it.");
        });
    };

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;

        let appName = "";

        if (/FBAN|FBAV/.test(userAgent)) {
            appName = "Facebook";
        } else if (/Instagram/.test(userAgent)) {
            appName = "Instagram";
        } else if (/LinkedInApp/.test(userAgent)) {
            appName = "LinkedIn";
        } else if (/WhatsApp/.test(userAgent)) {
            appName = "WhatsApp";
        } else if (/Messenger/.test(userAgent)) {
            appName = "Messenger";
        }

        if (appName) {
            setMessage(
                <>
                    ⚠️ You are viewing this site inside <strong>{appName}</strong>.<br />
                    👉 For the best experience, please open in <strong>Chrome</strong>.
                    🔗{" "}
                    <a
                        onClick={handleCopyLink}
                        className="underline text-blue-700 font-semibold cursor-pointer"
                    >
                       Link – Click to Copy
                    </a>.

                </>
            );
            setShowBanner(true);
        }
    }, []);

    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-14 md:my-20'>
                <div className="p-4">
                    {/* ⚠️ Slide-down warning banner */}
                    {showBanner && message && (
                        <div className="bg-yellow-100 text-yellow-800 p-3 rounded-md mb-4 text-sm font-semibold text-center relative animate-slide-down transition-all duration-500 ease-in-out">
                            <button
                                onClick={() => setShowBanner(false)}
                                className="absolute top-1 right-2 text-lg font-bold text-black"
                                aria-label="Close"
                            >
                                ×
                            </button>
                            {message}
                        </div>
                    )}
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-8 md:mt-20 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome to my portfolio!</span><br></br>
                        <span className="text-x">Hello, It's me</span>
                        <br></br>
                        {/* <span className='text-xl text-purple-700 font-semibold animate-color-change'> Subhadip De</span> */}
                        <span className="text-xl font-semibold bg-gradient-to-r from-purple-700/60 via-yellow-700/60 to-purple-600/80 bg-[length:200%] bg-clip-text text-transparent animate-gradient-flow">
                            Subhadip De
                        </span>




                        <div className="text-2xl sm:text-2xl md:text-4xl font-semibold flex flex-wrap items-center gap-x-2 mt-4">
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
