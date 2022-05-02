import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../../Partials/LoadingSpinner/LoadingSpinner';

const SingleBlog = () => {

    const [singleBlog,setSingleBlog] = useState({})
    const [loading, setLoading] = useState(false);

    const {id} = useParams()

    useEffect(() => {
        setLoading(true);

        const getBlog = async ()=>{

            const res = await axios.get(`https://polar-sea-52958.herokuapp.com/blog/${id}`);
            setSingleBlog(res.data);
            setLoading(false);

        }

        getBlog();

    },[id])

    if(loading){
        return <LoadingSpinner />
    }

    return (
        <div>

            <div className="px-5 md:px-20 pt-10 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-2">
                        <img className="w-full" src={singleBlog.image} alt="" />

                    </div>
                    <div>
                        <h1 className="text-xl md:text-3xl mb-2 font-bold">
                            {singleBlog.title}
                        </h1>

                        <div dangerouslySetInnerHTML={{ __html: singleBlog.description }}></div>

                    </div>

                </div>

                <div className="mx-auto text-center py-4">
                <Link className="py-2 px-6 bg-primary text-white rounded-full" to="/blogs">
                   <FontAwesomeIcon icon={faArrowLeft}/> All Blogs
                   </Link>
                </div>
            </div>
            
        </div>
    );
};

export default SingleBlog;