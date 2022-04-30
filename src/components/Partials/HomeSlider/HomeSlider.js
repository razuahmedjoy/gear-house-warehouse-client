import React from "react";
import slide1 from '../../../images/slide1.jpg'
import slide2 from '../../../images/slide2.jpg'
import './HomeSlider.css'

const HomeSlider = () => {
    return (
        <div className="hero-area">

            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel"
            >

                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>

                </div>


                <div className="carousel-inner relative w-full overflow-hidden">

                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={slide1}
                            className="block w-full"
                            alt="Motorbike Smoke"
                        />
                        <div className="carousel-caption absolute text-center md:text-left">
                            <h5 className="text-xl md:text-6xl font-bold text-white">Welcome to <span className="text-primary">Gear House</span></h5>
                            <p className="text-sm md:text-xl text-white">We have a great collection og Bikes that are takes as dealership and delivered with proper maintenance</p>
                            <button href="/" className="btn py-2 px-6 bg-primary text-white font-semibold rounded-full my-2 hover:bg-blue-600 duration-200">Inventories</button>
                        </div>
                    </div>


                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={slide2}
                            className="block w-full"
                            alt="Mountaintop"
                        />
                        <div className="carousel-caption absolute text-center md:text-left">
                            <h5 className="text-xl md:text-6xl font-bold text-white">TSK 950CC Two Disk</h5>
                            <p className="text-sm md:text-xl text-white">Strong engine options, including a plug-in hybrid
                                greenStandard adaptive air suspension delivers a comfortable</p>
                            <button href="/" className="btn py-2 px-6 bg-primary text-white font-semibold rounded-full my-2 hover:bg-blue-600 duration-200">Inventories</button>
                        </div>
                    </div>


                </div>


                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>








        </div>
    );
};

export default HomeSlider;
