import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Skills" },
        { id: 4, text: "Projects" },
        { id: 5, text: "Contact" },
    ];

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY) {
                setShowNavbar(true); // scrolling up
            } else {
                setShowNavbar(false); // scrolling down
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Top Navbar */}
            <div
            
                className={`fixed top-0 left-0 w-full bg-white z-50 shadow-md transition-transform duration-300 ${
                    showNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex justify-between items-center'>

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="/photo.jpg" className="h-10 w-10 rounded-full" alt="Logo" />
                        <div>
                            <h1 className="font-bold text-lg cursor-pointer">
                                Subha<span className="text-green-500">dip</span>
                            </h1>
                            <p className="text-sm text-gray-600">Software Developer</p>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex space-x-8 font-medium">
                        {navItems.map(({ id, text }) => (
                            <li key={id} className="hover:scale-110 cursor-pointer transition duration-200">
                                <Link
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Icon */}
                    <div className="md:hidden cursor-pointer" onClick={() => setMenu(true)}>
                        <AiOutlineMenu size={24} />
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            {menu && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
                    onClick={() => setMenu(false)}
                />
            )}

            {/* Slide-in Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform ${
                    menu ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <span className="font-semibold text-lg">Menu</span>
                    <IoCloseSharp size={24} onClick={() => setMenu(false)} className="cursor-pointer" />
                </div>
                <ul className="flex flex-col p-6 space-y-4">
                    {navItems.map(({ id, text }) => (
                        <li key={id} className="text-base font-medium hover:text-green-500 cursor-pointer">
                            <Link
                                to={text}
                                smooth={true}
                                duration={700}
                                offset={-70}
                                activeClass="active"
                                onClick={() => setMenu(false)}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
