import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../Partials/LoadingSpinner/LoadingSpinner';

// for confirmarion dialogue
import { Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';

const ManageInventory = () => {

    const [inventories, setInventories] = useState([]);
    const [perPage, setPerPage] = useState(8);
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0);

    const [loading, setLoading] = useState(false)

    const modals = useModals()
    const navigate = useNavigate()


    useEffect(() => {

        const getTotalCount = async () => {

            const res = await axios.get(`https://polar-sea-52958.herokuapp.com/inventories?count=True`);
            const { totalCount } = res.data;
            const pageCount = Math.ceil(totalCount / perPage);
            setTotalPage(pageCount);

        }

        getTotalCount();

    }, [])

    useEffect(() => {
        setLoading(true)
        const getInventories = async () => {
            const res = await axios.get(`https://polar-sea-52958.herokuapp.com/inventories?page=${page}&perpage=${perPage}`);
            const { data } = res;
            // console.log(data)
            setInventories(data);

            setLoading(false);
        }
        getInventories();

    }, [page])


    const confirmDelete = (productId) => {
        modals.openConfirmModal({
            title: 'Delete this Item?',
            centered: true,
            children: (
                <Text size="sm">
                    Are you sure you want to delete this item?
                </Text>
            ),
            labels: { confirm: '', cancel: "Yes Delete" },
            onCancel: () => deleteItem(productId),
            onConfirm: () => console.log('Confirmed'),
        });


    }

    const deleteItem = async (productId) => {
        const res = await axios.post(`https://polar-sea-52958.herokuapp.com/delete`, { id: productId })
        const { data } = res;
        if (data.deletedCount === 1) {
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
                            Name - Description
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
                        Delete / Edit
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
                            <td className="text-gray-900 font-light px-6 py-4">
                                <span className="font-extrabold"> {item.name}</span>
                                <br></br>
                                <p className="text-sm text-gray-500">{item.description.substring(0, 60)}.....</p>
                                <p className="text-sm font-bold">Added By: {item?.user_email}</p>
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
                            <td className="text-sm text-gray-900 font-light px-6 py-4 flex gap-2">
                                <button onClick={() => confirmDelete(item._id)} className="btn border-[1px] border-red-500 py-1 text-red-500 px-5 rounded-full hover:bg-red-500 hover:text-white duration-300"><FontAwesomeIcon icon={faTrash} /></button>
                                <button onClick={()=>navigate(`/edit/${item._id}`)} className="btn border-[1px] border-indigo-500 py-1 text-primary px-5 rounded-full hover:bg-primary hover:text-white duration-300">
                                    <FontAwesomeIcon icon={faEdit} /></button>
                            </td>

                        </tr>
                    )
                    }
                </tbody>
            </table>

            <div className="my-2 text-center">
                {
                    [...Array(totalPage).keys()].map(x =>
                        <button onClick={() => setPage(x)} key={x} className={`btn py-1 px-3 border-[1px] border-gray-400 rounded-lg mx-1 ${page === x && 'bg-primary text-white'}`}>{x + 1}</button>
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