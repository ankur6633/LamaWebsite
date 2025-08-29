"use client";

import Image from "next/image";

const CartModel = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
        <div className="flex flex-col gap-8">
          {/* ITEM */}
          <div className="flex gap-4">
            <Image
              src="https://images.pexels.com/photos/32765380/pexels-photo-32765380.jpeg"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              {/* TOP */}
              <div className="">
                {/* TITLE */}
                <div className="flex flex-col justify-between w-full">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
              </div>
              {/* BOTTOM */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          {/* ITEM */}
          <div className="flex gap-4">
            <Image
              src="https://images.pexels.com/photos/32765380/pexels-photo-32765380.jpeg"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              {/* TOP */}
              <div className="">
                {/* TITLE */}
                <div className="flex flex-col justify-between w-full">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
              </div>
              {/* BOTTOM */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="">
          <div className="">
            <span className="">Subtotal</span>
            <span className="">$49</span>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
