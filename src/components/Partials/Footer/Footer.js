import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleRight, faEnvelopeOpen, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {

    return (
        <section className="pt-10 bg-indigo-900">


            <div className="footer pb-5 px-5 md:px-10">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="about">
                        <h1 className="text-xl md:text-3xl text-white font-bold">Gears House</h1>
                        <p className="text-sm text-gray-300 py-4">We are a small warehouse management company who manage motor bikes with a great responsibility and stocks are updated daily on basis regular updates</p>
                        <div className="text-white flex flex-col justify-center gap-y-2 mt-2 text-sm md:text-base">
                            <div>
                                <FontAwesomeIcon icon={faLocationArrow} />
                                <span className="text-white mx-2">
                                    Kanosgari, Bogura Sadar, Bangladesh</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                                <span className="text-white mx-2">
                                    012 456 7895</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                                <span className="text-white mx-2">
                                    sales@gearhouse.joy</span>
                            </div>
                        </div>
                    </div>


                    <div className="ourinfo mt-4 md:mt-0">
                        <h1 className="text-xl md:text-3xl text-white font-bold">About Us</h1>
                        <div className="my-5">
                            <ul className="text-white footer-links">
                                <li>
                                    <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" /> <Link to="/">About Us</Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" /> <Link to="/">Our Services</Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" /> <Link to="/">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="quicklink mt-4 md:mt-0">
                        <h1 className="text-xl md:text-3xl text-white font-bold">Quick Links</h1>
                        <div className="my-5">
                            <ul className="text-white footer-links">
                                <li>
                                    <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" /> <Link to="/">Inventory</Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" /> <Link to="/manage-inventory">Manage Inventory</Link>
                                </li>
                              
                            </ul>
                        </div>
                    </div>

                    <div className="ourinfo mt-4 md:mt-0">
                        <h1 className="text-xl md:text-3xl text-white font-bold">Subscribe us</h1>
                        <div className="my-5 mr-3">
                            <input className="py-2 px-4 w-full text-blue-900 rounded-full bg-blue-200 outline-none border-none" type="email" name="" id="" placeholder='yourmail@gmail.com' />

                            <div className="w-full mx-auto text-center">
                                <input type="submit" value="Submit" className="btn py-2 px-6 border-[1px] border-white rounded-full cursor-pointer my-2 text-white hover:bg-white hover:text-blue-900 duration-300" />
                            </div>
                        </div>
                        <h1 className="text-md md:text-lg text-white font-bold">Follow us</h1>

                        <div className="social-icons text-white flex gap-3 py-2">
                            <a href="/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            <a href="/"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            <a href="/"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                            <a href="/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>


                        </div>
                    </div>

                </div>

            </div>

            <div className="bg-gray-900">
                <p className="text-center text-white py-2">
                    Designed by <span className="text-primary"> <a href="/">Razu Ahmed Joy</a></span>
                    <span> &copy; Copyright {new Date().getFullYear()} </span>
                </p>
            </div>
        </section>
    );
};

export default Footer;