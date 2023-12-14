
import React from 'react';
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Discord from "../assets/discord.png";


const Footer = () => {

    return (

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <div className=" py-4 text-gray-400">
                <div className="container px-4 mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-between">
                        <div className="px-4 my-4 w-full xl:w-1/5">
                            <h2 className='text-[#915EFF] text-2xl mb-4 font-bold'>Jannick Pedersen</h2>
                            <p className="">
                                I develop Fullstack Web Applications or High-End SPA <br className='sm:block hidden' />
                                With UX/UI tools and responsive intuitive design 
                            </p>
                        </div>

                        <div className="px-4 my-4 w-full sm:w-auto">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[#915EFF]">Sections</h2>
                            </div>
                            <ul className="leading-8">
                                <li><a href="#about" className="hover:text-[#7752FE]">About</a></li>
                                <li><a href="#work" className="hover:text-[#7752FE]">Work</a></li>
                                <li><a href="#works" className="hover:text-[#7752FE]">Projects</a></li>
                                <li><a href="#diplomas" className="hover:text-[#7752FE]">Diplomas</a></li>
                                <li><a href="#contact" className="hover:text-[#7752FE]">Contact</a></li>
                            </ul>
                        </div>
                        <div className="px-4 my-4 w-full sm:w-auto">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[#915EFF]">Other Projects</h2>
                            </div>
                            <ul className="leading-8">
                            <li><a href="https://jannickservice.netlify.app/" className="hover:text-[#7752FE]"><span className='text-[#5D12D2]'>FERN: </span>ReactJS + Firebase with Live Chat</a></li>
                            <li><a href="https://udemynextjsserverlessblog.vercel.app/" className="hover:text-[#7752FE]"><span className='text-[#5D12D2]'>Serverless: </span>Blog with NextJS, Sanity & Vercel</a></li>
                            <li><a href="https://nanoscale.up.railway.app/landing" className="hover:text-[#7752FE]"><span className='text-[#5D12D2]'>MERN: </span>NanoScale</a></li>
                            <li><a href="https://next-js-13-e-shop.vercel.app/" className="hover:text-[#7752FE]"><span className='text-[#5D12D2]'>MENN: </span>Orgone Jewels</a></li>
                            </ul>
                        </div>
                        <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[#915EFF]">Connect With Me</h2>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <a href="https://discord.com/invite/WGqJ2CZebb" className="inline-flex items-center justify-center h-10 w-10 border border-[#5D12D2] rounded-full mr-1 hover:text-blue-400 hover:border-[#915EFF] hover:scale-125">
                                    <img src={Discord} className='h-7 w-7' />
                                </a>
                                <a href="https://github.com/JannickPepe" className="inline-flex items-center justify-center h-10 w-10 border border-[#5D12D2] rounded-full mr-1 hover:text-blue-400 hover:border-[#915EFF] hover:scale-125">
                                    <img src={Github} className='h-7 w-7' />
                                </a>
                                <a href="https://linkedin.com/in/jannick-pedersen-3b8a36119" className="inline-flex items-center justify-center h-10 w-10 border border-[#5D12D2] rounded-full hover:text-blue-400 hover:border-[#915EFF] hover:scale-125">
                                    <img src={Linkedin} className='h-7 w-7' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

};


export default Footer;
