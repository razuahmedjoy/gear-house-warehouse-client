import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddItem = () => {

    const [user] = useAuthState(auth);
    // console.log(user?.email)

    const handleAddNewItem = async (e)=>{

        e.preventDefault();
        const data = {
            name: e.target.name.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            supllier_name: e.target.supllier.value,
            description: e.target.description.value,
            image: e.target.image.value,
            user_email: user?.email

        }
        const res = await axios.post(`http://localhost:8000/additem`,data);
        // console.log(res.status)
        if(res.status === 200){

            toast.success("Item Added!");
            e.target.reset();
            
        }


    }


    return (
        <div className="py-5 mx-2">
            <div className="card max-w-md mx-auto border-2 shadow-md p-2 md:p-5">

                <h2 className="text-center text-3xl mb-4">Add New Item</h2>

                <form onSubmit={handleAddNewItem} className="form w-full flex flex-col gap-2">
                    <div className="input-item my-2 mx-1">

                        <input className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="input-item my-2 mx-1">

                        <input className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="number" name="price" placeholder="Price" required />
                    </div>
                    <div className="input-item my-2 mx-1">

                        <input className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="number" name="quantity" placeholder="Quantity" required />
                    </div>
                    <div className="input-item my-2 mx-1">

                        <input className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" name="supllier" placeholder="Supplier Name" required />
                    </div>
                    <div className="input-item my-2 mx-1">

                        <input className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" name="image" placeholder="Image Link" required />
                    </div>
                    <div className="input-item my-2 mx-1">

                        <textarea className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" name="description" placeholder="Product descrription" required />
                    </div>

                    <input type="submit" className="cursor-pointer btn w-full p-2 border-2 outline-none bg-primary text-white"value="Add" />
                </form>

            </div>

            <p className="text-center py-5 ">
            <Link className="text-primary" to="/manage-inventory">Back To Manage Inventory Page</Link>
            </p>
        </div>
    );
};

export default AddItem;