"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import star from "../../public/star.png";

const CatagaryCard = ({ id, img, title, discount_Price, price, Sale }) => {
  return (
    <>
      <div className="bg-white rounded-xl group">
        <div className="relative flex flex-col items-center">
          <Image src={img} alt="image" className="w-full" />
          <div className="absolute hidden xl:bottom-10 bottom-6 group-hover:block">
            <div className="flex flex-col xl:gap-20 gap-12">
              <div className="flex flex-col gap-2 items-center justify-center h-full">
                <div className="flex gap-3">
                  <span className="text-primary bg-white h-10 w-10 rounded-full grid place-items-center border-2 border-primary">
                    <IoSearch />
                  </span>
                  <span className="text-primary bg-white h-10 w-10 rounded-full grid place-items-center border-2 border-primary">
                    <FaArrowsRotate />
                  </span>
                </div>
                <div className="text-primary bg-white h-10 w-10 rounded-full grid place-items-center border-2 border-primary">
                  <FaRegHeart />
                </div>
              </div>
              <Link
                href={`shop/${id}`}
                className="bg-primary text-white w-40 py-2 px-7 rounded-tr-3xl rounded-bl-3xl hover:bg-black text-center">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src={star} alt="icon" className="pt-7" />
          <h4 className="text-lg font-medium pt-4 pb-2">{title}</h4>
          <div className="flex flex-row gap-4 pb-7">
            <span className="line-through"> ${discount_Price}.00</span>
            <span className="text-primary">
              ${price}
              .00
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatagaryCard;
