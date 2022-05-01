import React from 'react';

const AddItem = () => {

    const handleAddNewItem =()=>{

    }

    
    return (
        <div className="py-5 mx-2">
            <div className="card max-w-md mx-auto border-2 shadow-md p-2 md:p-5">

                <h2 className="text-center text-3xl mb-4">Add New Item</h2>

                <form onSubmit={handleAddNewItem} className="form w-full flex flex-col gap-2">
                    <div className="input-item my-2 mx-1">

                        <input className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="input-item my-2 mx-1">

                        <input className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="number" name="price" placeholder="Price" />
                    </div>
                    <div className="input-item my-2 mx-1">

                        <input className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="number" name="quantity" placeholder="Quantity" />
                    </div>
                    <div className="input-item my-2 mx-1">

                        <input className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" name="supllier" placeholder="Supplier Name" />
                    </div>
                    <div className="input-item my-2 mx-1">

                        <input className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" name="image" placeholder="Image Link" />
                    </div>
                    <div className="input-item my-2 mx-1">

                        <textarea className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" name="description" placeholder="Product descrription" />
                    </div>

                    <input type="submit" className=" cursor-pointer btn w-full p-2 border-2 outline-none bg-primary text-white"value="Add" />
                </form>

            </div>
        </div>
    );
};

export default AddItem;