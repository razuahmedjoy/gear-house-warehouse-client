import axios from 'axios';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSingleInventory from '../../../hooks/useSingleInventory';

const SingleInventory = () => {

    const { id } = useParams()
    // const [item, setItem] = useState({})
    // const [loading, setLoading] = useState(false)
    const [item, setItem,loading] = useSingleInventory(id)


    const makeDelivered = async (itemid) => {
        if (item.quantity > 0) {
            try {

                const delivering = toast.loading("Processing..")

                const res = await axios.get(`https://polar-sea-52958.herokuapp.com/delivered/${itemid}`);

                // console.log(res.data)

                const newItem = { ...item, quantity: item.quantity - 1 }
                setItem(newItem)
                // console.log(newItem)

                toast.update(delivering, {
                    render: "Delivered", type: "success", isLoading: false, autoClose: 5000,
                    hideProgressBar: false
                })



            }
            catch (e) {
                console.log(e)
            }
        }
        else{
            toast.error("You don't have enough to deliver. Please update stock");
            return;
        }




    }

    const updateQuantity = async (e) => {
        e.preventDefault()
        const qty = parseInt(e.target.qty.value) + parseInt(item.quantity);
        try {
            const res = await axios.post(`https://polar-sea-52958.herokuapp.com/update/${item._id}`, { qty });

            const newItem = { ...item, quantity: qty }
            setItem(newItem)

            e.target.reset()

            toast("Updated")



        }
        catch (e) {
            console.log(e)
        }


    }

    if (loading) {
        return (
            <>


                <div className="grid grid-cols-2 py-10 px-2 md:px-10 gap-10">
                    <Skeleton height={200} />
                    <div>
                        <Skeleton height={60} />
                        <Skeleton width={100} height={30} />
                        <Skeleton width={150} height={20} />
                        <Skeleton height={80} />
                    </div>


                </div>


            </>
        )
    }

    return (
        <div className="w-full px-5 pb-20 md:px-10">

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
                        {item.quantity > 0 ? 
                        
                        <button className="btn p-2 px-6 rounded-full bg-primary hover:bg-gray-900 duration-200 text-white" onClick={() => makeDelivered(item._id)}>Delivered</button>
                        :
                        <button className="btn p-2 px-6 rounded-full bg-red-600 text-white">Stock Out</button>

                        }


                        <form onSubmit={updateQuantity} className="form mt-5 flex justify-center flex-col items-center gap-4">
                            <label htmlFor="quantity">Update Quantity</label>

                            <input className="py-2 px-6 border-none outline-none bg-gray-200 rounded-full" type="number" name="qty" id="" required />
                            <input type="submit" className="btn p-2 px-6 rounded-full font-bold border-2 border-primary text-primary cursor-pointer hover:bg-primary hover:text-white duration-300" value="Update" />

                        </form>

                        <div className="flex justify-center items-center">

                            <p className="my-2 mx-2">Or</p>

                        </div>
                        <Link className="block w-3/4 text-center md:w-1/3 btn bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-6 mx-auto rounded-full text-white" to={'/manage-inventory'}>Manage Inventories</Link>

                    </div>



                </div>
            </div>


        </div>
    );
};

export default SingleInventory;