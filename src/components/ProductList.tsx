"use client";

import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-12  flex-wrap">
      {/* Image Section */}
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/5855625/pexels-photo-5855625.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/5806958/pexels-photo-5806958.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
      {/* Product Details */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-md ring-1 w-max ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </div>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/5855625/pexels-photo-5855625.png"
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/5806958/pexels-photo-5806958.jpeg"
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md"
          />
        </div>
      {/* Product Details */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-md ring-1 w-max ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </div>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/5855625/pexels-photo-5855625.png"
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/5806958/pexels-photo-5806958.jpeg"
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md"
          />
        </div>
      {/* Product Details */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-md ring-1 w-max ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </div>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/5855625/pexels-photo-5855625.png"
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/5806958/pexels-photo-5806958.jpeg"
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md"
          />
        </div>
      {/* Product Details */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-md ring-1 w-max ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </div>
      </Link>

    </div>
  );
};

export default ProductList;
