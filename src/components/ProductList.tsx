"use client";

import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex felx-col gap-4 sm:w-[45%] lg:w-">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/5855625/pexels-photo-5855625.png"
            alt=""
            fill
            sizes="25vh "
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/5806958/pexels-photo-5806958.jpeg"
            alt=""
            fill
            sizes="25vh "
            className="absolute object-cover rounded-md"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
