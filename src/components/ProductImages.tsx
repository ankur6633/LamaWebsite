"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/33067303/pexels-photo-33067303.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/8633343/pexels-photo-8633343.jpeg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/33680070/pexels-photo-33680070.jpeg",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/33691286/pexels-photo-33691286.png",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="50vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
