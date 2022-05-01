import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../Partials/LoadingSpinner/LoadingSpinner';

const ManageInventory = () => {

    const [inventories, setInventories] = useState([]);
    const [perPage, setPerPage] = useState(8);
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0);

    const [loading, setLoading] = useState(false)


    useEffect(() => {

        const getTotalCount = async () => {

            const res = await axios.get(`http://localhost:8000/inventories?count=True`);
            const { totalCount } = res.data;
            const pageCount = Math.ceil(totalCount / perPage);
            setTotalPage(pageCount);

        }

        getTotalCount();

    }, [])

    useEffect(() => {
        setLoading(true)
        const getInventories = async () => {
            const res = await axios.get(`http://localhost:8000/inventories?page=${page}&perpage=${perPage}`);
            const { data } = res;
            console.log(data)
            setInventories(data);

            setLoading(false);
        }
        getInventories();

    }, [page])


  

    const deleteItem = async (productId) => {
        const res = await axios.post(`http://localhost:8000/delete`,{id:productId})
        const {data} = res;
        if (data.deletedCount === 1){
            const newInventoryList = inventories.filter(item => item._id !== productId)
            setInventories(newInventoryList);
            toast("Item deleted")
        }
    }

    const InventoryTableData = () => {
        return (<>
            <table className="min-w-full table-auto">
                <thead className="border-b">
                    <tr className="bg-gray-900 text-white">

                        <th width="100px" scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Image
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Name
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Quantity
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Price
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Supplier
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {inventories.map((item) =>
                        <tr key={item._id} className="border-b">

                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                <div className="flex rounded-full justify center items-center border-2 w-[70px]">
                                    <img className="rounded-full object-cover" src={item.image} alt="" />
                                </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                {item.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                {item.quantity}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                ${item.price}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                {item.supllier_name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                <button onClick={() => deleteItem(item._id)} className="btn border-[1px] border-red-500 py-1 text-red-500 px-5 rounded-full hover:bg-red-500 hover:text-white duration-300"><FontAwesomeIcon icon={faTrash} /></button>
                            </td>

                        </tr>
                    )
                    }
                </tbody>
            </table>

            <div className="my-2 text-center">
                {
                    [...Array(totalPage).keys()].map(x=>
                        <button onClick={()=>setPage(x)} key={x} className={`btn py-1 px-3 border-[1px] border-gray-400 rounded-lg mx-1 ${page === x && 'bg-primary text-white'}`}>{x+1}</button>
                        )
                }
            </div>
        </>

        )
    }

    return (
        <div>
            <div className="pt-5 mb-5 px-2 md:px-10 text-center sm:text-left">
                <Link to="/add-item" className="btn border-2 border-primary py-2 px-6 rounded-full text-primary text-center mx-auto hover:bg-primary hover:text-white duration-300">Add New Item</Link>
             
            </div>
      

            <div className="inventories w-full px-1 md:px-10">

            <button className="btn bg-gray-900 py-2 px-6 rounded-full text-white text-center block mx-auto">All Inventories</button>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">


                                {loading ? <LoadingSpinner /> : <InventoryTableData />}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageInventory;