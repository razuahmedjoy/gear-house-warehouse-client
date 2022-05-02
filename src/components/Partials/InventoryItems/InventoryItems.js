import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
const InventoryItems = () => {

    const [inventory, setInventory] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        

        const getInventories = async () => {
            setLoading(true)

            try {

                const res = await axios.get('https://polar-sea-52958.herokuapp.com/inventories?limit=6')

                setInventory(res.data)
                setLoading(false)

            }
            catch (err) {
                console.log(err);
            }
        }

        getInventories()
    }, [])

    const Loading = () => {
        return (
           <>
               <div className="">
                   <Skeleton height={300}/>
               </div>
               <div className="">
                   <Skeleton height={300}/>
               </div>
               <div className="">
                   <Skeleton height={300}/>
               </div>
           
           </>
        
        )
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {   loading ? <Loading /> :
                inventory.map(item =>
                    <div key={item._id} className="single-item border-[1px] rounded-md border-primary m-1 lg:mx-10 p-1 hover:shadow-lg duration-300">
                        <div className="item-image overflow-hidden cursor-pointer md:h-[150px] lg:h-[230px]">
                            <img className="hover:scale-110 duration-300" src={item.image} alt="{item.name}" />


                        </div>
                        <div className="item-details p-4">
                            <div className="item-title uppercase font-bold text-l md:text-xl">
                               {item.name}
                            </div>
                            <div className="flex justify-between my-2 text-sm lg:text-base">
                                <div className="price font-semibold">Rate: ${item.price}</div>
                                <div className="quantity font-semibold">Quantity: {item.quantity}</div>
                            </div>
                            <div className="description text-sm text-gray-500">
                                {item.description.length > 80 ? item.description.slice(0,80) : item.description}...

                            </div>
                            <p className="suplier font-medium pt-2 text-sm lg:text-md">Supplier: {item.supllier_name}</p>
                            <Link to={`/inventory/${item._id}`} className="update btn bg-primary text-white py-1 px-6 rounded-full inline-block text-center justify-center align-center mx-auto mt-5">Update</Link>

                        </div>


                    </div>
                )
            }




        </div>
    );
};

export default InventoryItems;