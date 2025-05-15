import React, { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/cartTotal";
import { assets } from "../assets/assets";

const PlaceOrder = () => {
  
  const [methood,setMethood]=useState('cod')
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">

    {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"DETAILS"} />
        </div>
        <div className="flex gap-3">
          <input
            className="bg-gray-200 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="bg-gray-200 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name  "
          />
        </div>
        <input
          className="bg-gray-200 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Enter Eamil Address"
        />
        <input
          className="bg-gray-200 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="bg-gray-200 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="bg-gray-200 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="bg-gray-200 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zip Code"
          />
          <input
            className="bg-gray-200 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name  "
          />
        </div>
        <input
          className="bg-gray-200 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone Number"
        />
      </div>

      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-8">
            <CartTotal/>
        </div>

        <div className="mt-12">
          <Title text1={'PAYEMENT'} text2={'METHOOD'}/>
          {/* PAYMENT METHOOD */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethood('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className="min-w-3.5 h-3.5 border rounded-full"></p>
                <img  className='h-5 mx-4' src={assets.stripe_logo}/> 
            </div>
            <div onClick={()=>setMethood('razor')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className="min-w-3.5 h-3.5 border rounded-full"></p>
                <img  className='h-5 mx-4' src={assets.razorpay_logo}/> 
            </div>
            <div onClick={()=>setMethood('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className="min-w-3.5 h-3.5 border rounded-full"></p>
                <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlaceOrder;
