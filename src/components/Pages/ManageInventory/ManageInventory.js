import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageInventory = () => {

    const [items,setItems] = useState([]);


    useEffect(() => {

        const getItems = async () => {

            // const res = await axios.get(`http://localhost:8000/inventories?`)

        }

        getItems();
    },[])

    return (
        <div>
            <div className="py-2 mb-5">
                <button className="btn bg-gray-900 py-2 px-6 rounded-full text-white text-center block mx-auto">Manage Inventories</button>

            </div>

            <div className="inventories w-full px-1 md:px-10">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-x-auto">
                                <table class="min-w-full table-auto">
                                    <thead class="border-b">
                                        <tr className="bg-gray-900 text-white">

                                            <th width="100px" scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                                Image
                                            </th>
                                            <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                                Name
                                            </th>
                                            <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                                Quantity
                                            </th>
                                            <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                                Price
                                            </th>
                                            <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                                Supplier
                                            </th>
                                            <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                                Action
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="border-b">

                                            <td class="text-sm text-gray-900 font-light px-6 py-4">
                                                <div class="flex rounded-full justify center items-center border-2 w-[70px]">
                                                    <img className="rounded-full object-cover" src="https://motorbike.autoshowroom.co/wp-content/uploads/2017/12/Kawasaki-Z900.jpg" alt="" />
                                                </div>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4">
                                                Here is the name of the Honda
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4">
                                                500
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4">
                                                $450
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4">
                                                Supplier
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4">
                                                <button className="btn border-[1px] border-red-500 py-1 text-red-500 px-5 rounded-full hover:bg-red-500 hover:text-white duration-300"><FontAwesomeIcon icon={faTrash} /></button>
                                            </td>

                                        </tr>
                            
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;