import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from "html-react-parser";
import LoadingSpinner from '../../Partials/LoadingSpinner/LoadingSpinner';

const Blogs = ({limit}) => {
    
    const [blogs,setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const getBlogs = async ()=>{
            const res = await axios.get('http://localhost:8000/blogs/')
            setBlogs(res.data);
            setLoading(false)
        }

        getBlogs();
    },[])

    if(loading) {
        return <LoadingSpinner />
    }

    const blogImgStyle = {
       
            minHeight: "163px"
        
    }
    let sliceend;
    if(limit){
        // console.log("from limit")
        sliceend = limit
    }
    else{
        // console.log("from else")
        sliceend = blogs.length+1
    }


    return (
        <div className="pt-10 pb-20">
            <h1 className="text-center text-2xl md:text-4xl text-primary uppercase font-semibold">
                Recent Blogs
            </h1>
            <hr className="w-1/4 mt-5 text-center m-auto border-blue-300" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-10 py-5">


        {
            blogs.slice(0,sliceend).map(blog => 
                
                <div key={blog._id} className="blog-grid border-[1px] rounded-md bg-white mx-10 p-1 hover:shadow-lg duration-300">
                    <div className="blog-image overflow-hidden cursor-pointer m-4 rounded-">
                        <img style={blogImgStyle} className="hover:scale-110 duration-300" src={blog.image} alt="" />


                    </div>
                    <div className="item-details px-4">
                        <div className="blog-title uppercase font-bold text-l md:text-xl">
                            {blog.title}
                        </div>

                        <div className="description text-sm text-gray-500">
                            {parse(blog.description.substring(0,60))}...

                        </div>

                        <Link to={`/blog/${blog._id}`} className="update btn bg-primary text-white py-1 px-6 rounded-full inline-block text-center justify-center align-center mx-auto my-5">Read More</Link>

                    </div>


                </div>

            )
        }




            </div>
        </div>

    );
};

export default Blogs;