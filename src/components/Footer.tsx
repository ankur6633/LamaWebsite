import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24 bg-gray-200 text-sm">
      {/* TOP */}
      <div className="flex justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
        <Link href="/">
        <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolore.
        </p>
        <span className="font-semibold">ankurkumar6633@gmail.com</span>
        <span className="font-semibold">+91 707 075 2364</span>
        <div className="flex gap-6">
          <Image src="/facebook.png" alt="" width={16} height={16} />
          <Image src="/facebook.png" alt="" width={16} height={16} />
          <Image src="/facebook.png" alt="" width={16} height={16} />
          <Image src="/facebook.png" alt="" width={16} height={16} />
          <Image src="/facebook.png" alt="" width={16} height={16} />
        </div>
        </div>
        {/* CENTER */}
        <div className="w-1/2"></div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
          <div className="flex">
            <input type="text" placeholder="Email Address" className="p-4 w-3/4" />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className=""></div>
    </div>
  )
}

export default Footer
