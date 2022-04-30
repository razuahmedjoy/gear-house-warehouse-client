import React from 'react';

const InventoryItems = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="single-item border-[1px] rounded-md border-primary m-1 p-1 hover:shadow-lg duration-300">
                <div className="item-image overflow-hidden cursor-pointer">
                    <img className="hover:scale-110 duration-300" src="https://motorbike.autoshowroom.co/wp-content/uploads/2019/12/wallhaven-460482.jpg" alt="" />
       

                </div>
                <div className="item-details p-4">
                    <div className="item-title uppercase font-bold text-l md:text-xl">
                    YAMAHA XVS650
                    </div>
                    <div className="flex justify-between my-2 text-sm lg:text-base">
                        <div className="price font-semibold">Rate: $500</div>
                        <div className="quantity font-semibold">Quantity: 600</div>
                    </div>
                    <div className="description text-sm text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, id!...
                    
                    </div>
                    <p className="suplier font-medium pt-2 text-sm lg:text-md">Supplier: Suplier Name</p>
                    <a  href="/" className="update btn bg-primary text-white py-1 px-6 rounded-full inline-block text-center justify-center align-center mx-auto mt-5">Update</a>

                </div>


            </div>
        
        
      
            
        </div>
    );
};

export default InventoryItems;