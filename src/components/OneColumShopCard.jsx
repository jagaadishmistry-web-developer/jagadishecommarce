import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import star from "../../public/star.png";
import Link from "next/link";
import { FaArrowsRotate, FaRegHeart } from "react-icons/fa6";

const OneColumShopCard = ({ img, title, discount_Price, price }) => {
  return (
    <>
      <div className="grid md:grid-cols-3 2xl:gap-8 gap-6">
        <div className="md:col-span-1 relative group flex justify-center items-center">
          <div className="absolute group-hover:block hidden bg-black/50 w-full h-full">
            <div className="flex flex-col items-center justify-center h-full gap-2 text-white">
              <IoSearch className="p-2 h-10 w-10 text-black bg-white rounded-full border border-primary" />
            </div>
          </div>
          <Image src={img} alt="image" className="w-full h-[290px]" />
        </div>
        <div className="md:col-span-2 flex flex-col gap-3">
          <Image src={star} alt="icon" />
          <p className="xl:text-2xl text-lg font-medium pt-2">{title}</p>
          <div className="flex gap-2">
            <span className="line-through"> ${discount_Price}.00</span>
            <span className="text-primary">
              ${price}
              .00
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis…
          </p>
          <div className="flex gap-2 pt-5">
            <Link
              href="/home"
              className="bg-primary text-white w-40 py-2 px-7 rounded-tr-3xl rounded-bl-3xl hover:bg-black text-center">
              Add to Cart
            </Link>
            <FaArrowsRotate className="border border-primary h-10 w-10 p-2 text-primary rounded-full" />
            <FaRegHeart className="border border-primary h-10 w-10 p-2 text-primary rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OneColumShopCard;
