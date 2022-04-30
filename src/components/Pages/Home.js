import React from 'react';
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
            </section>


            {/* Team  Details */}

            <section className="team-section py-20">

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

            <section className="footer py-10 bg-indigo-900 px-5 md:px-10">

                <Footer />

            </section>



        </div>
    );
};

export default Home;