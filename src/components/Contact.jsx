import React, { useState } from 'react';
import { IoCallSharp } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbz-NLO-FC1P0uMYNOVUQh4vnmt1V3gmiRO06kcRksq_Z1IolpVlaoTzv8WcpyJzuWJxVg/exec', {
                method: 'POST',
                mode: 'no-cors', // For CORS issues; you can use CORS headers in Apps Script for better feedback
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            alert("Message sent successfully!");
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            alert("Failed to send message.");
            console.error(error);
        }
    };

    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-8 md:my-16'>
                {/* ... other contact details remain the same ... */}
                <h1 className='font-semibold text-xl md:text-2xl'>Contact Me</h1>
                <div className='justify-center mt-3'>
                    <h2>Let's discuss your project</h2>
                </div>
                <div className='mt-3'>
                    <div className='flex '>
                        <IoCallSharp className='text-x md:text-xl text-purple-700' /><p className="text-sm md:text-x flex ml-3 font-semibold ">Phone</p>
                    </div>
                    <span className='text-xs md:text-sm ml-7 md:ml-8 text-justify text-gray-500 tracking-tight'>+91 8637547409</span>
                </div>
                <div className='mt-2'>
                    <div className='flex '>
                        <TbMailFilled className='text-x md:text-xl text-purple-700 mt-0.5 md:mt-0' /><p className="text-sm md:text-x font-semibold flex ml-3 ">Email Address</p>
                    </div>
                    <span className='text-xs md:text-sm ml-7 md:ml-8 text-gray-500 text-justify tracking-tight '>subhadipde300@gmail.com</span>
                </div>
                <div className='mt-3'>
                    <div className='flex '>
                        <FaLocationDot className='text-x md:text-xl text-purple-700 mt-0.5 md:mt-0' /><p className="text-sm md:text-x flex ml-3  font-semibold ">Official Address</p>
                    </div>
                    <span className='text-xs md:text-sm ml-7 md:ml-8 flex text-justify text-gray-500 tracking-tight leading-none'>NH-60, Narayangarh, Paschim Medinipur, West Bengal – 721437, India</span>
                </div>
                <div className='mt-10'>
                    <p className='text-sm md:text-base text-gray-500'>I'm always open to discussing product</p>
                    <div>
                    <h3 className='text-sm md:text-base font-semibold'>design work or partnerships.</h3>
                    </div>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                       
                        <div className='mt-5 border shadow bg-slate-100 '>
                            <div className='flex text-center py-4 justify-center bg-teal-200 font-semibold '>
                            <h1>Send your message</h1>
                        </div>

                            <input
                                className='shadow appearance-none border border-transparent text-sm md:text-base focus:border-black  bg-pink-100 text-black w-full py-3 placeholder-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                name='name'
                                type='text'
                                placeholder='Full Name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className='shadow appearance-none border border-transparent text-sm md:text-base focus:border-black mt-3 bg-pink-100 text-black w-full py-3 placeholder-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                name='email'
                                type='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className='shadow appearance-none border border-transparent text-sm md:text-base focus:border-black mt-3 bg-pink-100 text-black w-full py-3 placeholder-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                name='subject'
                                type='text'
                                placeholder='Subject'
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <textarea
                                className='shadow appearance-none mt-3 h-32 border border-transparent text-sm md:text-base focus:border-black resize-none align-top bg-pink-100 text-black w-full py-6 placeholder-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                name='message'
                                placeholder='Message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex justify-center'>
                            <button type='submit' className='flex border py-2 px-3 text-center text-sm md:text-base bg-violet-400 hover:bg-purple-500 text-white mt-3 '>
                                Send Message <IoIosSend className='text-base md:text-xl mt-1 ml-2' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
