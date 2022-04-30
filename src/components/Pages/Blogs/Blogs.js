import React from 'react';


const Blogs = () => {


    return (
        <div className="pt-10 pb-20">
            <h1 className="text-center text-2xl md:text-4xl text-primary uppercase font-semibold">
                Recent Blogs
            </h1>
            <hr className="w-1/4 mt-5 text-center m-auto border-blue-300" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-10 py-5">



                <div className="blog-grid border-[1px] rounded-md bg-white mx-10 p-1 hover:shadow-lg duration-300">
                    <div className="blog-image overflow-hidden cursor-pointer m-4 rounded-">
                        <img className="hover:scale-110 duration-300" src="https://motorbike.autoshowroom.co/wp-content/uploads/2019/12/wallhaven-460482.jpg" alt="" />


                    </div>
                    <div className="item-details px-4">
                        <div className="blog-title uppercase font-bold text-l md:text-xl">
                            Main reasons to buy luxury car in 2019
                        </div>

                        <div className="description text-sm text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, id!...

                        </div>

                        <a href="/" className="update btn bg-primary text-white py-1 px-6 rounded-full inline-block text-center justify-center align-center mx-auto my-5">Read More</a>

                    </div>


                </div>





            </div>
        </div>

    );
};

export default Blogs;