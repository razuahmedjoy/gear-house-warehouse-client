import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Partials/Footer/Footer';
import HomeSlider from '../Partials/HomeSlider/HomeSlider';
import InventoryItems from '../Partials/InventoryItems/InventoryItems';
import TeamMembers from '../Partials/TeamMembers/TeamMembers';
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <HomeSlider />

            {/* inventory section */}
            <section className="inventory-section py-20">

                <h1 className="text-center text-2xl md:text-4xl text-primary uppercase font-semibold">
                    Inventory Items
                </h1>
                <hr className="w-1/4 mt-5 text-center m-auto border-blue-800" />
                <div className="invetory-items my-5 px-5 md:px-10">
                    <InventoryItems />
                </div>

                <div className="mt-5 flex justify-center">
                    <Link className="btn bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-6 mx-auto rounded-full text-white" to={'/manage-inventory'}>Manage Inventories</Link>
                </div>
            </section>


            {/* Team  Details */}

            <section className="team-section py-20 px-5">

                <h1 className="text-center text-2xl md:text-4xl text-primary uppercase font-semibold">
                    Our Teams
                </h1>
                <hr className="w-1/4 mt-5 text-center m-auto border-blue-800" />
                <div className="team-members my-5 px-5 md:px-10">
                    <TeamMembers />

                </div>

            </section>


            {/* blogs */}
            <section className="blogs bg-gray-900">


                <div className="blogs">

                    <Blogs />

                </div>



            </section>


            {/* footer */}
            <section>


                <div className="footer py-10 bg-indigo-900 px-5 md:px-10">

                    <Footer />

                </div>

                <div className="bg-gray-900">
                    <p className="text-center text-white py-2">
                     Designed by <span className="text-primary"> <a href="/">Razu Ahmed Joy</a></span> 
                     <span> &copy; Copyright {new Date().getFullYear()} </span>
                    </p>
                </div>
            </section>



        </div>
    );
};

export default Home;