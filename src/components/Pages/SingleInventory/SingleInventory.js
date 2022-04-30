import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleInventory = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {

        const getSingleItem = async () => {

            try {

                const res = await axios.get(`http://localhost:8000/inventory/${id}`);
                setItem(res.data);
            }
            catch (e) {
                console.log(e)
            }

        }
        getSingleItem()

    }, [])


    return (
        <div className="w-full px-5 md:px-10">

            <div className="grid grid-cols md:grid-cols-2 gap-5">
                <div className="p-2 md:p-4">
                    <img src={item.image} className="w-full border-[1px] border-gray-200 p-1 md:p-10 shadow-md" alt="" />
                </div>

                <div className="p-2 md:p-4 md:mt-5">
                    <h1 className="text-xl md:text-3xl mb-4">{item.name}</h1>

                    <p className="text-xl">Price: ${item.price}</p>
                    <p className="text-xl">Quantity: {item.quantity}</p>
                    <p className="text-xl">Supplier Name: {item.supllier_name}</p>

                    <p className="text-md my-2">{item.description}</p>

                    <div>
                        <button className="btn p-2 px-6 rounded-full bg-primary hover:bg-gray-900 duration-200 text-white">Delivered</button>
                        <div className="flex justify-center items-center">
                            <hr />
                            <p className="my-2 mx-2">Or</p>
                            <hr />
                        </div>
                        <form className="form mt-5 flex justify-center flex-col items-center gap-4">
                            <label htmlFor="quantity">Update Quantity</label>
                            
                            <input className="py-2 px-6 border-none outline-none bg-gray-200 rounded-full" type="number" name="quantity" id="" />
                            <input type="submit" className="btn p-2 px-6 rounded-full font-bold border-2 border-primary text-primary cursor-pointer hover:bg-primary hover:text-white duration-300" value="Update"/>

                        </form>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default SingleInventory;